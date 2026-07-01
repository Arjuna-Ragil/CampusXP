package repository

import (
	"github.com/Arjuna-Ragil/CampusXP/internal/core/models"
	"gorm.io/gorm"
)

type StudentRepository interface {
	GetProfile(userID string) (*models.StudentProfile, error)
	UpdateProfile(profile *models.StudentProfile) error
	SubmitAchievement(achievement *models.Achievement) error
	GetSubmissions(studentID string) ([]models.Achievement, error)
	GetLeaderboard(limit int) ([]models.StudentProfile, error)
	ClaimReward(tx *gorm.DB, claim *models.RewardClaim) error
	GetRewards() ([]models.Reward, error)
	GetRewardByID(id string) (*models.Reward, error)
	UpdatePoints(tx *gorm.DB, studentID string, pointsToDeduct int) error
	GetDB() *gorm.DB // For transaction management
	AddStudentSkill(studentID string, skillName string) error
}

type studentRepository struct {
	db *gorm.DB
}

func NewStudentRepository(db *gorm.DB) StudentRepository {
	return &studentRepository{db: db}
}

func (r *studentRepository) GetDB() *gorm.DB {
	return r.db
}

func (r *studentRepository) GetProfile(userID string) (*models.StudentProfile, error) {
	var profile models.StudentProfile
	err := r.db.Preload("User").Preload("Achievements").Preload("StudentSkills.Skill").
		Where("user_id = ?", userID).First(&profile).Error
	return &profile, err
}

func (r *studentRepository) UpdateProfile(profile *models.StudentProfile) error {
	return r.db.Model(profile).Select("NIM", "Major", "Bio").Updates(profile).Error
}

func (r *studentRepository) SubmitAchievement(achievement *models.Achievement) error {
	return r.db.Create(achievement).Error
}

func (r *studentRepository) AddStudentSkill(studentID string, skillName string) error {
	return r.db.Transaction(func(tx *gorm.DB) error {
		var skill models.Skill
		// Check if skill exists (case-insensitive approximation by using raw string or just lowercase check)
		// For simplicity, we just use FirstOrCreate
		err := tx.Where("name = ?", skillName).FirstOrCreate(&skill, models.Skill{Name: skillName}).Error
		if err != nil {
			return err
		}
		
		// Check if student already has this skill
		var count int64
		tx.Model(&models.StudentSkill{}).Where("student_id = ? AND skill_id = ?", studentID, skill.ID).Count(&count)
		if count > 0 {
			// Already has it, do nothing or return nil
			return nil
		}

		// Create student skill
		studentSkill := models.StudentSkill{
			StudentID: studentID,
			SkillID:   skill.ID,
		}
		return tx.Create(&studentSkill).Error
	})
}

func (r *studentRepository) GetSubmissions(studentID string) ([]models.Achievement, error) {
	var achievements []models.Achievement
	err := r.db.Where("student_id = ?", studentID).Order("created_at desc").Find(&achievements).Error
	return achievements, err
}

func (r *studentRepository) GetLeaderboard(limit int) ([]models.StudentProfile, error) {
	var profiles []models.StudentProfile
	err := r.db.Order("total_points desc").Limit(limit).Preload("User").Find(&profiles).Error
	return profiles, err
}

func (r *studentRepository) ClaimReward(tx *gorm.DB, claim *models.RewardClaim) error {
	return tx.Create(claim).Error
}

func (r *studentRepository) GetRewards() ([]models.Reward, error) {
	var rewards []models.Reward
	err := r.db.Where("is_active = ?", true).Order("point_cost asc").Find(&rewards).Error
	return rewards, err
}

func (r *studentRepository) GetRewardByID(id string) (*models.Reward, error) {
	var reward models.Reward
	err := r.db.Where("id = ?", id).First(&reward).Error
	return &reward, err
}

func (r *studentRepository) UpdatePoints(tx *gorm.DB, studentID string, pointsToDeduct int) error {
	return tx.Model(&models.StudentProfile{}).
		Where("id = ?", studentID).
		UpdateColumn("total_points", gorm.Expr("total_points - ?", pointsToDeduct)).Error
}
