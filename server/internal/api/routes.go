package api

import (
	"github.com/Arjuna-Ragil/CampusXP/internal/api/handlers"
	"github.com/Arjuna-Ragil/CampusXP/internal/core/middleware"
	"github.com/gin-gonic/gin"
)

type Deps struct {
	AuthMiddleware *middleware.AuthDB
	StudentHandler *handlers.StudentHandler
	AdminHandler   *handlers.AdminHandler
}

func SetupRouter(r *gin.Engine, d Deps) {
	Protected := r.Group("/protected")
	Protected.Use(d.AuthMiddleware.AuthMiddleware())
	api := r.Group("/api/v1")
	// Use mock auth middleware for all api routes
	api.Use(d.AuthMiddleware.AuthMiddleware())
	
	// Student Routes
	students := api.Group("/students")
	{
		students.GET("/profile", d.StudentHandler.GetProfile)
		students.POST("/achievements", d.StudentHandler.SubmitAchievement)
		students.GET("/achievements", d.StudentHandler.GetAchievements)
		students.GET("/leaderboard", d.StudentHandler.GetLeaderboard)
		students.POST("/rewards/claim", d.StudentHandler.ClaimReward)
	}

	// Reward Catalog (accessible by students, maybe admins too)
	api.GET("/rewards", d.StudentHandler.GetRewards)

	// Admin Routes
	admin := api.Group("/admin")
	{
		admin.GET("/stats", d.AdminHandler.GetDashboardStats)
		admin.GET("/students", d.AdminHandler.GetStudents)
		admin.GET("/submissions/pending", d.AdminHandler.GetPendingSubmissions)
		admin.PUT("/submissions/:id/verify", d.AdminHandler.VerifySubmission)
		
		// Admin Reward Management
		admin.GET("/rewards", d.AdminHandler.GetRewards)
		admin.POST("/rewards", d.AdminHandler.CreateReward)
		admin.PUT("/rewards/:id", d.AdminHandler.UpdateReward)
		admin.DELETE("/rewards/:id", d.AdminHandler.DeleteReward)
	}
}