package main

import (
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize Gin router
	router := gin.Default()

	// Configure CORS
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"} // Frontend URL
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization"}
	router.Use(cors.New(config))

	// Routes
	api := router.Group("/api")
	{
		// Public routes
		api.GET("/programs", getPrograms)
		api.GET("/events", getEvents)
		api.POST("/contact", submitContactForm)
		api.POST("/donate", processDonation)

		// Protected routes (will add authentication middleware later)
		admin := api.Group("/admin")
		{
			admin.POST("/programs", createProgram)
			admin.PUT("/programs/:id", updateProgram)
			admin.DELETE("/programs/:id", deleteProgram)
		}
	}

	// Start server
	log.Fatal(router.Run(":8080"))
}

// Handler functions
func getPrograms(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"programs": []gin.H{
			{
				"id":          1,
				"name":        "Family Campus",
				"description": "Temporary housing and comprehensive support for families",
			},
			{
				"id":          2,
				"name":        "Kosodo Cares",
				"description": "Emergency assistance and basic needs support",
			},
		},
	})
}

func getEvents(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"events": []gin.H{},
	})
}

func submitContactForm(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Contact form submitted successfully",
	})
}

func processDonation(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Donation processed successfully",
	})
}

func createProgram(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Program created successfully",
	})
}

func updateProgram(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Program updated successfully",
	})
}

func deleteProgram(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Program deleted successfully",
	})
}
