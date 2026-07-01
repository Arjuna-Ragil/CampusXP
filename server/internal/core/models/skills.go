package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Skill struct {
	ID          string `gorm:"primaryKey" json:"id"`
	Name    string `gorm:"not null" json:"name"`
}

func (c *Skill) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}