package repository

import (
	"github.com/Arjuna-Ragil/CampusXP/internal/core/models"
	"gorm.io/gorm"
)

type AdminRepository interface {
	GetDashboardStats() (map[string]int64, error)
	GetPendingSubmissions() ([]models.Achievement, error)
	UpdateSubmissionStatus(tx *gorm.DB, id string, status models.ApprovalStatus, pointsAwarded int) error
	GetSubmissionByID(id string) (*models.Achievement, error)
	GetStudentsWithFilters(skillName string, minPoints int) ([]models.StudentProfile, error)
	
	// Rewards CRUD
	CreateReward(reward *models.Reward) error
	GetRewards() ([]models.Reward, error)
	GetRewardByID(id string) (*models.Reward, error)
	UpdateReward(reward *models.Reward) error
	DeleteReward(id string) error

	GetDB() *gorm.DB
}

type adminRepository struct {
	db *gorm.DB
}

func NewAdminRepository(db *gorm.DB) AdminRepository {
	return &adminRepository{db: db}
}

func (r *adminRepository) GetDB() *gorm.DB {
	return r.db
}

func (r *adminRepository) GetDashboardStats() (map[string]int64, error) {
	stats := make(map[string]int64)
	var studentCount int64
	var pendingCount int64
	var skillMapCount int64
	var portfolioCount int64

	if err := r.db.Model(&models.User{}).Where("role = ?", models.RoleMahasiswa).Count(&studentCount).Error; err != nil {
		return nil, err
	}
	if err := r.db.Model(&models.Achievement{}).Where("status = ?", models.StatusPending).Count(&pendingCount).Error; err != nil {
		return nil, err
	}
	if err := r.db.Model(&models.Skill{}).Count(&skillMapCount).Error; err != nil {
		return nil, err
	}
	if err := r.db.Model(&models.Achievement{}).Count(&portfolioCount).Error; err != nil {
		return nil, err
	}

	stats["total_students"] = studentCount
	stats["total_pending_submissions"] = pendingCount
	stats["total_skills_mapped"] = skillMapCount
	stats["total_submitted_portfolios"] = portfolioCount
	return stats, nil
}

func (r *adminRepository) GetPendingSubmissions() ([]models.Achievement, error) {
	var achievements []models.Achievement
	err := r.db.Preload("StudentProfile").Where("status = ?", models.StatusPending).Find(&achievements).Error
	return achievements, err
}

func (r *adminRepository) GetSubmissionByID(id string) (*models.Achievement, error) {
	var achievement models.Achievement
	err := r.db.Where("id = ?", id).First(&achievement).Error
	return &achievement, err
}

func (r *adminRepository) UpdateSubmissionStatus(tx *gorm.DB, id string, status models.ApprovalStatus, pointsAwarded int) error {
	return tx.Model(&models.Achievement{}).
		Where("id = ?", id).
		Updates(map[string]interface{}{
			"status":         status,
			"points_awarded": pointsAwarded,
		}).Error
}

func (r *adminRepository) GetStudentsWithFilters(skillName string, minPoints int) ([]models.StudentProfile, error) {
	var profiles []models.StudentProfile

	query := r.db.Preload("User").Preload("StudentSkills.Skill").Where("total_points >= ?", minPoints)

	if skillName != "" {
		// Join with StudentSkills and Skills tables to strictly filter by the skill name
		query = query.Joins("JOIN student_skills ON student_skills.student_id = student_profiles.id").
			Joins("JOIN skills ON skills.id = student_skills.skill_id").
			Where("skills.name ILIKE ?", "%"+skillName+"%"). // ILIKE for case insensitive if postgres, or LIKE for mysql. Assuming postgres as gorm defaults
			Group("student_profiles.id")
	}

	err := query.Order("total_points desc").Find(&profiles).Error
	return profiles, err
}

func (r *adminRepository) CreateReward(reward *models.Reward) error {
	return r.db.Create(reward).Error
}

func (r *adminRepository) GetRewards() ([]models.Reward, error) {
	var rewards []models.Reward
	err := r.db.Order("created_at desc").Find(&rewards).Error
	return rewards, err
}

func (r *adminRepository) GetRewardByID(id string) (*models.Reward, error) {
	var reward models.Reward
	err := r.db.Where("id = ?", id).First(&reward).Error
	return &reward, err
}

func (r *adminRepository) UpdateReward(reward *models.Reward) error {
	return r.db.Save(reward).Error
}

func (r *adminRepository) DeleteReward(id string) error {
	return r.db.Delete(&models.Reward{}, "id = ?", id).Error
}
