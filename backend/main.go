package main

import (
	"cocktails-backend/routes"
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"time"
)

func main() {
	fmt.Println("Starting cocktails backend...")

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"PUT", "PATCH"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "http://localhost:3000"
		},
		MaxAge: 12 * time.Hour,
	}))

	r.GET("/random_cocktail", routes.GetRandomCocktail)
	r.GET("/ingredientByName", routes.GetIngedientByName)

	r.Run()
}
