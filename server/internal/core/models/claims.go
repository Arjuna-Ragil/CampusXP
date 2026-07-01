package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type RewardClaim struct {
	ID             string          `gorm:"type:uuid;primaryKey" json:"id"`
	StudentID      string          `gorm:"type:uuid;not null" json:"student_id"`
	StudentProfile *StudentProfile `gorm:"foreignKey:StudentID;constraint:OnDelete:CASCADE;" json:"student_profile,omitempty"`
	RewardID       string          `gorm:"type:uuid;not null" json:"reward_id"`
	Reward         *Reward         `gorm:"constraint:OnDelete:CASCADE;" json:"reward,omitempty"`
	ClaimedAt      time.Time       `json:"claimed_at"`
}

func (c *RewardClaim) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}
