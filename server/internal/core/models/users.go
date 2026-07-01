package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type RoleType string

const (
	RoleAdmin     RoleType = "ADMIN"
	RoleMahasiswa RoleType = "MAHASISWA"
)

type ApprovalStatus string

const (
	StatusPending  ApprovalStatus = "PENDING"
	StatusApproved ApprovalStatus = "APPROVED"
	StatusRejected ApprovalStatus = "REJECTED"
)

type AchievementType string

const (
	AchievementSertifikatLokal         AchievementType = "SERTIFIKAT_LOKAL"
	AchievementSertifikatRegional      AchievementType = "SERTIFIKAT_REGIONAL"
	AchievementSertifikatNasional      AchievementType = "SERTIFIKAT_NASIONAL"
	AchievementSertifikatInternasional AchievementType = "SERTIFIKAT_INTERNASIONAL"
	AchievementPortfolioPersonal       AchievementType = "PORTFOLIO_PERSONAL"
	AchievementPortfolioFreelance      AchievementType = "PORTFOLIO_FREELANCE"
	AchievementPortfolioIndustri       AchievementType = "PORTFOLIO_INDUSTRI"
)

type User struct {
	ID             string          `gorm:"type:uuid;primaryKey" json:"id"`
	Username       string          `gorm:"not null" json:"username"`
	Email          string          `gorm:"unique;not null" json:"email"`
	Role           RoleType        `gorm:"type:varchar(20);not null" json:"role"`
	CreatedAt      time.Time       `json:"created_at"`
	UpdatedAt      time.Time       `json:"updated_at"`
	StudentProfile *StudentProfile `gorm:"constraint:OnDelete:CASCADE;" json:"student_profile,omitempty"`
}

func (c *User) BeforeCreate(tx *gorm.DB) (err error) {
	if c.ID == "" {
		c.ID = uuid.New().String()
	}
	return
}
