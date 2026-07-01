package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	ID         string `gorm:"primaryKey" json:"id"`
	Username   string `gorm:"not null" json:"username"`
	Email      string `gorm:"not null" json:"email"`
	Role       string `gorm:"not null" json:"role"`
	ProfileURL string `json:"profile_url"`
}

func (c *User) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}
