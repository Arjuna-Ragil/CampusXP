package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Achievement struct {
	ID      string `gorm:"primaryKey" json:"id"`
	Type    string `gorm:"not null" json:"Type"` // ubah jadi enum, nanti valuenya biar aku yang ubah
	Title   string `gorm:"not null" json:"title"`
	Desc    string `json:"desc"`
	FileURL string `gorm:"not null" json:"file_url"`
	Status  string `gorm:"not null" json:"status"` // semua status uabh ke enum
	Points   string `json:"points"`
}

func (c *Achievement) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}
