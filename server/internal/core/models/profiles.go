package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type StudentProfile struct {
	ID            string         `gorm:"type:uuid;primaryKey" json:"id"`
	UserID        string         `gorm:"type:uuid;unique;not null" json:"user_id"`
	User          *User          `gorm:"constraint:OnDelete:CASCADE;" json:"user,omitempty"`
	FullName      string         `gorm:"not null" json:"full_name"`
	NIM           string         `gorm:"unique;not null" json:"nim"`
	Major         string         `gorm:"not null" json:"major"`
	TotalPoints   int            `gorm:"default:0" json:"total_points"`
	Bio           string         `json:"bio"`
	CreatedAt     time.Time      `json:"created_at"`
	UpdatedAt     time.Time      `json:"updated_at"`
	StudentSkills []StudentSkill `gorm:"constraint:OnDelete:CASCADE;" json:"student_skills,omitempty"`
	Achievements  []Achievement  `gorm:"constraint:OnDelete:CASCADE;" json:"achievements,omitempty"`
	RewardClaims  []RewardClaim  `gorm:"constraint:OnDelete:CASCADE;" json:"reward_claims,omitempty"`
}

func (c *StudentProfile) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}
