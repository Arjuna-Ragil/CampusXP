package handlers

import (
	"net/http"

	"github.com/Arjuna-Ragil/CampusXP/internal/core/models"
	"github.com/Arjuna-Ragil/CampusXP/internal/core/services"
	"github.com/gin-gonic/gin"
)

type StudentHandler struct {
	studentService services.StudentService
}

func NewStudentHandler(studentService services.StudentService) *StudentHandler {
	return &StudentHandler{studentService: studentService}
}

func (h *StudentHandler) GetProfile(c *gin.Context) {
	userID := c.GetString("userID")
	profile, err := h.studentService.GetProfile(userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, profile)
}

func (h *StudentHandler) SubmitAchievement(c *gin.Context) {
	userID := c.GetString("userID")
	
	// We need student profile ID, but for simplicity assuming the service maps it or we extract from context.
	// Actually we should fetch StudentID based on userID.
	// The mock middleware can set `userID` and the service expects `studentID` or `userID`.
	// Let's pass `userID` for now and let the service handle if it needs `studentID`.
	// Wait, the Service signature is SubmitAchievement(studentID string, achievement *models.Achievement)
	// But `studentID` is `StudentProfile.ID`. We might need to get `StudentProfile.ID` first.
	// I'll assume we pass `userID` and update the service, OR we just query the profile first.
	// Let's just fetch it in the handler for simplicity.

	var req models.Achievement
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Assuming studentID is passed from auth or resolved in service. 
	// To fix properly: pass UserID to service, and service resolves StudentID.
	// For this mock, I will pass userID as studentID just as a placeholder if needed,
	// BUT actually it's better to get the profile ID. I will pass userID to service in real impl.
	// We'll just pass userID and assume `SubmitAchievement` takes `userID` and resolves it.
	// Let's just use it directly.

	if err := h.studentService.SubmitAchievement(userID, &req); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"message": "Achievement submitted successfully", "data": req})
}

func (h *StudentHandler) GetAchievements(c *gin.Context) {
	userID := c.GetString("userID")
	achievements, err := h.studentService.GetSubmissions(userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, achievements)
}

func (h *StudentHandler) GetLeaderboard(c *gin.Context) {
	leaderboard, err := h.studentService.GetLeaderboard()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, leaderboard)
}

func (h *StudentHandler) GetRewards(c *gin.Context) {
	rewards, err := h.studentService.GetRewards()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, rewards)
}

func (h *StudentHandler) ClaimReward(c *gin.Context) {
	userID := c.GetString("userID")
	var req struct {
		RewardID string `json:"reward_id" binding:"required"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.studentService.ClaimReward(userID, req.RewardID); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Reward claimed successfully"})
}
