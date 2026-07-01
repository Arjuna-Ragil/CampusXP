package main

import (
	"fmt"
	"log"
	"os"

	"github.com/Arjuna-Ragil/CampusXP/internal/api"
	"github.com/Arjuna-Ragil/CampusXP/internal/api/handlers"
	"github.com/Arjuna-Ragil/CampusXP/internal/config"
	"github.com/Arjuna-Ragil/CampusXP/internal/core/middleware"
	"github.com/Arjuna-Ragil/CampusXP/internal/core/services"
	"github.com/Arjuna-Ragil/CampusXP/internal/repository"
	"github.com/Arjuna-Ragil/CampusXP/internal/seed"
	// "github.com/Arjuna-Ragil/CampusXP/internal/database"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	cfg := config.LoadConfig()
	if cfg.AppEnv != "local" {
		gin.SetMode(gin.ReleaseMode)
	}

	db, err := config.ConnectDB(&cfg)
	if err != nil {
		log.Fatalf("DB didn't run successfully: %v", err)
	}
	if err := db.MigrateDB(); err != nil {
		log.Fatalf("Failed to migrate DB: %v", err)
	}

	bkt, err := config.InitBucket(&cfg)
	if err != nil {
		log.Fatalf("Bucket didn't initiate successfully: %v", err)
	}

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	app := SetupApp(db, bkt)

	if os.Getenv("SEED_DB") == "true" {
		seed.SeedDB(db.Gorm)
	}

	api.SetupRouter(r, app)

	server_port := fmt.Sprintf(":%s", cfg.Port)
	if err := r.Run(server_port); err != nil {
		log.Fatalf("Server didn't run successfully: %v", err)
	}
}

func SetupApp(db *config.DB, bkt *config.Bucket) api.Deps{
	authMiddleware := middleware.NewAuthDB(db)

	studentRepo := repository.NewStudentRepository(db.Gorm)
	adminRepo := repository.NewAdminRepository(db.Gorm)

	studentService := services.NewStudentService(studentRepo)
	adminService := services.NewAdminService(adminRepo, studentRepo)

	studentHandler := handlers.NewStudentHandler(studentService)
	adminHandler := handlers.NewAdminHandler(adminService)

	return api.Deps{
		AuthMiddleware: authMiddleware,
		StudentHandler: studentHandler,
		AdminHandler:   adminHandler,
	}
}