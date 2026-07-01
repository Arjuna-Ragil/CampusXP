package seed

import (
	"log"

	"github.com/Arjuna-Ragil/CampusXP/internal/core/models"
	"gorm.io/gorm"
)

func SeedDB(db *gorm.DB) {
	log.Println("Running database seeder...")

	// 1. Create dummy users
	adminUser := models.User{
		Email:    "admin@example.com",
		Username: "admin_user",
		Role:     models.RoleAdmin,
	}
	db.Where(models.User{Email: "admin@example.com"}).Attrs(adminUser).FirstOrCreate(&adminUser)

	studentUser := models.User{
		Email:    "student@example.com",
		Username: "alex_student",
		Role:     models.RoleMahasiswa,
	}
	db.Where(models.User{Email: "student@example.com"}).Attrs(studentUser).FirstOrCreate(&studentUser)

	// 2. Create student profile
	studentProfile := models.StudentProfile{
		UserID:      studentUser.ID,
		FullName:    "Alex Student",
		NIM:         "2024-88592",
		Major:       "B.S. Computer Science",
		TotalPoints: 2450,
		Bio:         "Passionate about backend engineering.",
	}
	db.Where(models.StudentProfile{UserID: studentUser.ID}).Attrs(studentProfile).FirstOrCreate(&studentProfile)

	// 3. Create dummy skills
	skills := []models.Skill{
		{Name: "Python"},
		{Name: "UI/UX"},
		{Name: "Figma"},
		{Name: "Prototyping"},
	}
	for i := range skills {
		db.Where(models.Skill{Name: skills[i].Name}).Attrs(skills[i]).FirstOrCreate(&skills[i])
	}

	// 4. Create dummy student skills
	if len(skills) > 0 {
		studentSkill := models.StudentSkill{
			StudentID: studentProfile.ID,
			SkillID:   skills[0].ID, // Python
			Status:    models.StatusApproved,
		}
		db.Where(models.StudentSkill{StudentID: studentProfile.ID, SkillID: skills[0].ID}).Attrs(studentSkill).FirstOrCreate(&studentSkill)
	}

	// 5. Create dummy rewards
	rewards := []models.Reward{
		{
			Name:        "Mentorship Session",
			Description: "1-on-1 mentorship with an industry expert.",
			PointCost:   500,
			StockQuota:  10,
			IsActive:    true,
		},
		{
			Name:        "Silver Badge",
			Description: "Exclusive profile badge for active students.",
			PointCost:   2500,
			StockQuota:  50,
			IsActive:    true,
		},
		{
			Name:        "CampusXP Merch",
			Description: "Limited edition t-shirt and stickers.",
			PointCost:   1200,
			StockQuota:  5,
			IsActive:    true,
		},
	}
	for i := range rewards {
		db.Where(models.Reward{Name: rewards[i].Name}).Attrs(rewards[i]).FirstOrCreate(&rewards[i])
	}

	// 6. Create dummy achievements
	achievements := []models.Achievement{
		{
			StudentID:   studentProfile.ID,
			Title:       "Python Web Scraper Project",
			Type:        models.AchievementPortfolioPersonal,
			Description: "Created a web scraper to gather public research data.",
			Status:      models.StatusApproved,
			PointsAwarded: 150,
		},
		{
			StudentID:   studentProfile.ID,
			Title:       "Cloud Computing Certificate",
			Type:        models.AchievementSertifikatNasional,
			Description: "AWS Certified Developer - Associate.",
			Status:      models.StatusPending,
		},
	}
	for i := range achievements {
		db.Where(models.Achievement{Title: achievements[i].Title, StudentID: studentProfile.ID}).Attrs(achievements[i]).FirstOrCreate(&achievements[i])
	}

	log.Println("Database seeded successfully.")
}
