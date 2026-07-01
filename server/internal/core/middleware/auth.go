package middleware

import (
	"context"
	"log"
	"net/http"
	"strings"

	"github.com/Arjuna-Ragil/CampusXP/internal/config"
	"github.com/Arjuna-Ragil/CampusXP/internal/core/models"
	"github.com/coreos/go-oidc"
	"github.com/gin-gonic/gin"
)

type AuthDB struct {
	DB       *config.DB
	Verifier *oidc.IDTokenVerifier
}

func NewAuthDB(db *config.DB) *AuthDB {
	ctx := context.Background()
	provider, err := oidc.NewProvider(ctx, "https://sso.arjunaa.my.id/application/o/campus-xp/")
	if err != nil {
		log.Fatalf("Failed to connect to authentik: %v", err)
	}
	verifier := provider.Verifier(&oidc.Config{SkipClientIDCheck: true})

	return &AuthDB{
		DB:       db,
		Verifier: verifier,
	}
}

func (db *AuthDB) AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("authorization")
		var tokenString string
		if authHeader != "" {
			tokenString = strings.Replace(authHeader, "Bearer ", "", 1)
		} else {
			tokenString = c.Query("token")
		}

		if tokenString == "" {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
				"error": "No Authentication token",
			})
			return
		}

		idToken, err := db.Verifier.Verify(c.Request.Context(), tokenString)
		if err != nil {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
				"error": "Token is invalid",
			})
			return
		}
		var claims struct {
			Subject  string `json:"sub"`
			Email             string `json:"email"`
			PreferredUsername string `json:"preferred_username"`
			Name              string `json:"name"`
		}
		if err := idToken.Claims(&claims); err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error": "Failed to read token",
			})
			return
		}
		var user models.User
		username := claims.PreferredUsername
		if username == "" {
			username = strings.Split(claims.Email, "@")[0]
		}

		err = db.DB.Gorm.Where(models.User{ID: claims.Subject}).Attrs(models.User{
			Email:    claims.Email,
			Username: username,
			Role:     models.RoleMahasiswa, // Default role
		}).FirstOrCreate(&user).Error
		
		if err != nil {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to find / create user",
			})
			return
		}
		// Ensure StudentProfile exists for Mahasiswa
		if user.Role == models.RoleMahasiswa {
			var profile models.StudentProfile
			db.DB.Gorm.Where(models.StudentProfile{UserID: user.ID}).Attrs(models.StudentProfile{
				FullName: claims.Name, // Use OIDC name if available
				NIM:      "N/A",       // Default, user should update later
				Major:    "Undeclared",
			}).FirstOrCreate(&profile)
		}

		c.Set("userID", user.ID)
		c.Set("userRole", user.Role)
		c.Next()
	}
}

func (db *AuthDB) RequireAdmin() gin.HandlerFunc {
	return func(c *gin.Context) {
		role, exists := c.Get("userRole")
		if !exists || role != models.RoleAdmin {
			c.AbortWithStatusJSON(http.StatusForbidden, gin.H{
				"error": "Admin access required",
			})
			return
		}
		c.Next()
	}
}
