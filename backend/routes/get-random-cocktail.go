package routes

import (
	"cocktails-backend/config"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func GetRandomCocktail(c *gin.Context) {
	randomEndpointUrl := config.GetExternalAPIRoutes().RANDOM_COCKTAIL

	res, err := http.Get(randomEndpointUrl)
	if err != nil {
		log.Fatal("Cannot get random cocktail", err)
	}

	defer res.Body.Close()

	var decoded interface{}

	json.NewDecoder(res.Body).Decode(&decoded)

	c.JSON(http.StatusOK, gin.H{
		"response": decoded,
	})
}
