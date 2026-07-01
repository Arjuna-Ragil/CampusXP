package services

import (
	"errors"

	"github.com/Arjuna-Ragil/CampusXP/internal/core/models"
	"github.com/Arjuna-Ragil/CampusXP/internal/repository"
)

type AdminService interface {
	GetDashboardStats() (map[string]int64, error)
	GetPendingSubmissions() ([]models.Achievement, error)
	VerifySubmission(id string, status models.ApprovalStatus, pointsAwarded int) error
	SearchTalent(skillName string, minPoints int) ([]models.StudentProfile, error)

	CreateReward(reward *models.Reward) error
	GetRewards() ([]models.Reward, error)
	GetRewardByID(id string) (*models.Reward, error)
	UpdateReward(id string, req *models.Reward) error
	DeleteReward(id string) error
}

type adminService struct {
	repo        repository.AdminRepository
	studentRepo repository.StudentRepository // Needed to update student points positively on approval
}

func NewAdminService(repo repository.AdminRepository, studentRepo repository.StudentRepository) AdminService {
	return &adminService{repo: repo, studentRepo: studentRepo}
}

func (s *adminService) GetDashboardStats() (map[string]int64, error) {
	return s.repo.GetDashboardStats()
}

func (s *adminService) GetPendingSubmissions() ([]models.Achievement, error) {
	return s.repo.GetPendingSubmissions()
}

func (s *adminService) VerifySubmission(id string, status models.ApprovalStatus, pointsAwarded int) error {
	tx := s.repo.GetDB().Begin()
	if tx.Error != nil {
		return tx.Error
	}
	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	achievement, err := s.repo.GetSubmissionByID(id)
	if err != nil {
		tx.Rollback()
		return err
	}

	if achievement.Status != models.StatusPending {
		tx.Rollback()
		return errors.New("submission is already verified")
	}

	// Update the submission status
	if err := s.repo.UpdateSubmissionStatus(tx, id, status, pointsAwarded); err != nil {
		tx.Rollback()
		return err
	}

	// If approved, give points to student
	if status == models.StatusApproved && pointsAwarded > 0 {
		// UpdatePoints in studentRepo deducts, so we pass negative to add points
		if err := s.studentRepo.UpdatePoints(tx, achievement.StudentID, -pointsAwarded); err != nil {
			tx.Rollback()
			return err
		}
	}

	return tx.Commit().Error
}

func (s *adminService) SearchTalent(skillName string, minPoints int) ([]models.StudentProfile, error) {
	return s.repo.GetStudentsWithFilters(skillName, minPoints)
}

func (s *adminService) CreateReward(reward *models.Reward) error {
	return s.repo.CreateReward(reward)
}

func (s *adminService) GetRewards() ([]models.Reward, error) {
	return s.repo.GetRewards()
}

func (s *adminService) GetRewardByID(id string) (*models.Reward, error) {
	return s.repo.GetRewardByID(id)
}

func (s *adminService) UpdateReward(id string, req *models.Reward) error {
	reward, err := s.repo.GetRewardByID(id)
	if err != nil {
		return err
	}
	reward.Name = req.Name
	reward.Description = req.Description
	reward.PointCost = req.PointCost
	reward.StockQuota = req.StockQuota
	reward.IsActive = req.IsActive

	return s.repo.UpdateReward(reward)
}

func (s *adminService) DeleteReward(id string) error {
	return s.repo.DeleteReward(id)
}
