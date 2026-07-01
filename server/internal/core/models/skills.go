package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Skill struct {
	ID            string         `gorm:"type:varchar(255);primaryKey" json:"id"`
	Name          string         `gorm:"unique;not null" json:"name"`
	CreatedAt     time.Time      `json:"created_at"`
	UpdatedAt     time.Time      `json:"updated_at"`
	StudentSkills []StudentSkill `gorm:"constraint:OnDelete:CASCADE;" json:"student_skills,omitempty"`
}

func (c *Skill) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}