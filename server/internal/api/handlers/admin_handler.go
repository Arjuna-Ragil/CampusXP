package handlers

import (
	"net/http"

	"github.com/Arjuna-Ragil/CampusXP/internal/core/models"
	"github.com/Arjuna-Ragil/CampusXP/internal/core/services"
	"github.com/gin-gonic/gin"
)

type AdminHandler struct {
	adminService services.AdminService
}

func NewAdminHandler(adminService services.AdminService) *AdminHandler {
	return &AdminHandler{adminService: adminService}
}

func (h *AdminHandler) GetDashboardStats(c *gin.Context) {
	stats, err := h.adminService.GetDashboardStats()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, stats)
}

func (h *AdminHandler) GetStudents(c *gin.Context) {
	skillName := c.Query("skill")
	major := c.Query("major")

	students, err := h.adminService.SearchTalent(skillName, major)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, students)
}

func (h *AdminHandler) GetPendingSubmissions(c *gin.Context) {
	submissions, err := h.adminService.GetPendingSubmissions()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, submissions)
}

func (h *AdminHandler) VerifySubmission(c *gin.Context) {
	id := c.Param("id")
	var req struct {
		Status        models.ApprovalStatus `json:"status" binding:"required"`
		PointsAwarded int                   `json:"points_awarded"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.adminService.VerifySubmission(id, req.Status, req.PointsAwarded); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Submission verified successfully"})
}

func (h *AdminHandler) CreateReward(c *gin.Context) {
	var req models.Reward
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.adminService.CreateReward(&req); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, req)
}

func (h *AdminHandler) GetRewards(c *gin.Context) {
	rewards, err := h.adminService.GetRewards()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, rewards)
}

func (h *AdminHandler) UpdateReward(c *gin.Context) {
	id := c.Param("id")
	var req models.Reward
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.adminService.UpdateReward(id, &req); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Reward updated"})
}

func (h *AdminHandler) DeleteReward(c *gin.Context) {
	id := c.Param("id")
	if err := h.adminService.DeleteReward(id); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Reward deleted"})
}
