package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type StdSkill struct {
	ID          string `gorm:"primaryKey" json:"id"`
	Status    string `gorm:"not null" json:"status"`
}

func (c *StdSkill) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}