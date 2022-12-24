package config

type TExternalAPIRoutes struct {
	RANDOM_COCKTAIL    string
	INGREDIENT_BY_NAME string
}

func GetExternalAPIRoutes() TExternalAPIRoutes {
	routes := TExternalAPIRoutes{
		RANDOM_COCKTAIL:    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
		INGREDIENT_BY_NAME: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=",
	}

	return routes
}
