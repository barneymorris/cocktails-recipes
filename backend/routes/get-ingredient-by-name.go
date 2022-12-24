package routes

import (
	"cocktails-backend/config"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func GetIngedientByName(c *gin.Context) {
	randomEndpointUrl := config.GetExternalAPIRoutes().INGREDIENT_BY_NAME

	res, err := http.Get(randomEndpointUrl + c.Query("i"))
	if err != nil {
		log.Fatal("Cannot get ingredient by name", err)
	}

	defer res.Body.Close()

	var decoded interface{}

	json.NewDecoder(res.Body).Decode(&decoded)

	c.JSON(http.StatusOK, gin.H{
		"response": decoded,
	})
}
