package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Claim struct {
	ID      string `gorm:"primaryKey" json:"id"`
	ClaimAt string `gorm:"not null" json:"claim_at"`
}

func (c *Claim) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}
