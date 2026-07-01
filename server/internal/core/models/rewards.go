package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Reward struct {
	ID           string        `gorm:"type:varchar(255);primaryKey" json:"id"`
	Name         string        `gorm:"not null" json:"name"`
	Description  string        `json:"description"`
	PointCost    int           `gorm:"not null" json:"point_cost"`
	StockQuota   int           `gorm:"not null" json:"stock_quota"`
	IsActive     bool          `gorm:"default:true" json:"is_active"`
	CreatedAt    time.Time     `json:"created_at"`
	UpdatedAt    time.Time     `json:"updated_at"`
	RewardClaims []RewardClaim `gorm:"constraint:OnDelete:CASCADE;" json:"reward_claims,omitempty"`
}

func (c *Reward) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}