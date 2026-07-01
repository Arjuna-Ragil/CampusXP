package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type StudentSkill struct {
	ID             string          `gorm:"type:varchar(255);primaryKey" json:"id"`
	StudentID      string          `gorm:"type:varchar(255);not null" json:"student_id"`
	StudentProfile *StudentProfile `gorm:"foreignKey:StudentID;constraint:OnDelete:CASCADE;" json:"student_profile,omitempty"`
	SkillID        string          `gorm:"type:varchar(255);not null" json:"skill_id"`
	Skill          *Skill          `gorm:"constraint:OnDelete:CASCADE;" json:"skill,omitempty"`
	ProofURL       string          `json:"proof_url"`
	AdminID        *string         `gorm:"type:varchar(255)" json:"admin_id"`
	Admin          *User           `gorm:"foreignKey:AdminID;constraint:OnDelete:SET NULL;" json:"admin,omitempty"`
	CreatedAt      time.Time       `json:"created_at"`
	UpdatedAt      time.Time       `json:"updated_at"`
}

func (c *StudentSkill) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}