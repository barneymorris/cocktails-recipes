import { Box, List, ListItem } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { TCocktail } from "../../types/Cocktail";
import { Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { TIngredient } from "../../types/Ingredient";
import { config } from "../../config";

type Props = {
  cocktail: TCocktail;
  setIngredientData: Dispatch<SetStateAction<TIngredient | undefined>>;
  setIndex: Dispatch<SetStateAction<number>>;
};

export const Cocktail: React.FC<Props> = ({
  cocktail,
  setIngredientData,
  setIndex,
}) => {
  return (
    <Box w="100%">
      <Box width="30%" margin="0 auto">
        <img src={cocktail.strDrinkThumb} alt="cocktail" />
      </Box>

      <Box mt="8">
        <Text textAlign="center" fontSize="36px">
          {cocktail.strDrink}
        </Text>
      </Box>

      <Box>
        <Text textAlign="left" fontSize="36px">
          Ingredients
        </Text>

        <List>
          {(Object.keys(cocktail) as Array<keyof typeof cocktail>).map(
            (key) => {
              if (key.includes("strIngredient") && cocktail[key]) {
                return (
                  <ListItem fontSize="24" key={key}>
                    <NextLink href="">
                      <Text
                        _hover={{ textDecoration: "underline" }}
                        color="blue.300"
                        onClick={async () => {
                          const url = `${config.backend}/ingredientByName?i=${cocktail[key]}`;

                          const ingredients = (await fetch(url).then((res) =>
                            res.json()
                          )) as { response: { ingredients: TIngredient[] } };

                          const ingredient =
                            ingredients.response.ingredients[0];

                          setIngredientData(ingredient);
                          setIndex(1);
                        }}
                      >
                        {key.split("strIngredient")[1]}) {cocktail[key]}
                      </Text>
                    </NextLink>
                  </ListItem>
                );
              }
            }
          )}
        </List>
      </Box>

      {Boolean(cocktail.strInstructions) && (
        <Box mt="8">
          <Text textAlign="left" fontSize="36px">
            How to make:
          </Text>

          <Text fontSize="24">{cocktail.strInstructions}</Text>
        </Box>
      )}
    </Box>
  );
};
