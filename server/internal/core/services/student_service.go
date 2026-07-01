package services

import (
	"errors"

	"github.com/Arjuna-Ragil/CampusXP/internal/core/models"
	"github.com/Arjuna-Ragil/CampusXP/internal/repository"
)

type StudentService interface {
	GetProfile(userID string) (map[string]interface{}, error)
	SubmitAchievement(studentID string, achievement *models.Achievement) error
	GetSubmissions(studentID string) ([]models.Achievement, error)
	GetLeaderboard() ([]models.StudentProfile, error)
	ClaimReward(studentID, rewardID string) error
	GetRewards() ([]models.Reward, error)
}

type studentService struct {
	repo repository.StudentRepository
}

func NewStudentService(repo repository.StudentRepository) StudentService {
	return &studentService{repo: repo}
}

func (s *studentService) GetProfile(userID string) (map[string]interface{}, error) {
	profile, err := s.repo.GetProfile(userID)
	if err != nil {
		return nil, err
	}

	// AI Placeholder recommendations
	recommendations := []string{
		"Complete the Web Development Bootcamp",
		"Submit your Python project for 500 points",
		"Join the Data Science Hackathon",
	}

	return map[string]interface{}{
		"profile":         profile,
		"total_points":    profile.TotalPoints,
		"recommendations": recommendations,
	}, nil
}

func (s *studentService) SubmitAchievement(userID string, achievement *models.Achievement) error {
	profile, err := s.repo.GetProfile(userID)
	if err != nil {
		return err
	}
	achievement.StudentID = profile.ID
	achievement.Status = models.StatusPending
	return s.repo.SubmitAchievement(achievement)
}

func (s *studentService) GetSubmissions(userID string) ([]models.Achievement, error) {
	profile, err := s.repo.GetProfile(userID)
	if err != nil {
		return nil, err
	}
	return s.repo.GetSubmissions(profile.ID)
}

func (s *studentService) GetLeaderboard() ([]models.StudentProfile, error) {
	// Top 10 students
	return s.repo.GetLeaderboard(10)
}

func (s *studentService) ClaimReward(userID, rewardID string) error {
	profile, err := s.repo.GetProfile(userID)
	if err != nil {
		return err
	}
	studentID := profile.ID

	tx := s.repo.GetDB().Begin()
	if tx.Error != nil {
		return tx.Error
	}
	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	// Lock the reward to prevent concurrent over-claiming if we tracked quota strictly.
	// For now, just get it
	reward, err := s.repo.GetRewardByID(rewardID)
	if err != nil {
		tx.Rollback()
		return err
	}

	if !reward.IsActive {
		tx.Rollback()
		return errors.New("reward is not active")
	}

	// Check if student has enough points
	// In a real app we might need to lock the student profile as well.
	// We'll update the points using a safe SQL decrement in the repository layer.
	// But first we check if points > cost (this is a simple non-locked check for UX).
	// A strictly safe approach is to `UPDATE ... WHERE total_points >= point_cost`.
	
	var profileLock models.StudentProfile
	if err := tx.Where("id = ?", studentID).First(&profileLock).Error; err != nil {
		tx.Rollback()
		return err
	}

	if profileLock.TotalPoints < reward.PointCost {
		tx.Rollback()
		return errors.New("insufficient points to claim this reward")
	}

	// Deduct points safely
	if err := s.repo.UpdatePoints(tx, studentID, reward.PointCost); err != nil {
		tx.Rollback()
		return err
	}

	// Insert RewardClaim
	claim := &models.RewardClaim{
		StudentID: studentID,
		RewardID:  rewardID,
	}

	if err := s.repo.ClaimReward(tx, claim); err != nil {
		tx.Rollback()
		return err
	}

	return tx.Commit().Error
}

func (s *studentService) GetRewards() ([]models.Reward, error) {
	return s.repo.GetRewards()
}
