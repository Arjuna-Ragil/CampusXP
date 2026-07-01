package config

import (
	"log"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DB struct {
	Gorm *gorm.DB
}

func ConnectDB(cfg *Config) (*DB, error){
	gormDB, err := gorm.Open(postgres.Open(cfg.DBURL), &gorm.Config{}); if err != nil {
		log.Fatalf("Connection to DB Failed: %v", err)
	}
	log.Printf("Connected to DB")

	return &DB{Gorm: gormDB}, nil
}

func (db *DB) MigrateDB() error {
	err := db.Gorm.AutoMigrate(
		
	)
	if err != nil {
		log.Fatalf("Failed to migrate DB: %v", err)
	}
	log.Printf("Successfully migrated DB")

	return nil
}