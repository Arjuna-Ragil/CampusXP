package api

import (
	"github.com/Arjuna-Ragil/CampusXP/internal/core/middleware"
	"github.com/gin-gonic/gin"
)

type Deps struct {
	AuthMiddleware *middleware.AuthDB
}

func SetupRouter(r *gin.Engine, d Deps) {
	Protected := r.Group("/protected")
	Protected.Use(d.AuthMiddleware.AuthMiddleware())
	{
		api := Protected.Group("/api")
		{

		}
	}

}