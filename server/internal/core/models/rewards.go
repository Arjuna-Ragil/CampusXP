package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Reward struct {
	ID   string `gorm:"primaryKey" json:"id"`
	Name string `gorm:"not null" json:"name"`
	Desc string `gorm:"not null" json:"desc"`
	Cost int `gorm:"not null" json:"cost"`
	Stock int `gorm:"not null" json:"stock"`
	IsActive bool `gorm:"not null" json:"is_active"`
}

func (c *Reward) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}