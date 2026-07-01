package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Profile struct {
	ID          string `gorm:"primaryKey" json:"id"`
	FullName    string `gorm:"not null" json:"full_name"`
	Bio         string `json:"bio"`
	NIM         int    `gorm:"not null" json:"nim"`
	Major       string `gorm:"not null" json:"major"`
	TotalPoints int    `json:"total_points"`
}

func (c *Profile) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}
