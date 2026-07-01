package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Achievement struct {
	ID             string          `gorm:"type:varchar(255);primaryKey" json:"id"`
	StudentID      string          `gorm:"type:varchar(255);not null" json:"student_id"`
	StudentProfile *StudentProfile `gorm:"foreignKey:StudentID;constraint:OnDelete:CASCADE;" json:"student_profile,omitempty"`
	Type           AchievementType `gorm:"type:varchar(50);not null" json:"type"`
	Title          string          `gorm:"not null" json:"title"`
	Description    string          `json:"description"`
	EvidenceURL    string          `json:"evidence_url"`
	Status         ApprovalStatus  `gorm:"type:varchar(20);default:'PENDING'" json:"status"`
	PointsAwarded  int             `gorm:"default:0" json:"points_awarded"`
	AdminID        *string         `gorm:"type:varchar(255)" json:"admin_id"`
	Admin          *User           `gorm:"foreignKey:AdminID;constraint:OnDelete:SET NULL;" json:"admin,omitempty"`
	CreatedAt      time.Time       `json:"created_at"`
	UpdatedAt      time.Time       `json:"updated_at"`
}

func (c *Achievement) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}
