import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { config } from "../../config";
import { TCocktail } from "../../types/Cocktail";
import { TIngredient } from "../../types/Ingredient";
import { Cocktail } from "../Cocktail/Cocktail";
import { Ingredient } from "../Ingredient/Ingredient";

type Props = {
  ingredient: undefined | TIngredient;
  cocktail: TCocktail;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  setIngredientData: Dispatch<SetStateAction<TIngredient | undefined>>;
  setCocktailData: Dispatch<SetStateAction<TCocktail>>;
};

export const Navigation: React.FC<Props> = ({
  cocktail,
  index,
  ingredient,
  setIndex,
  setCocktailData,
  setIngredientData,
}) => {
  return (
    <Tabs index={index}>
      <TabList>
        <Tab onClick={() => setIndex(0)}>Cocktails</Tab>
        <Tab onClick={() => setIndex(1)}>Ingredients</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Button
            onClick={async () => {
              const url = `${config.backend}/random_cocktail`;

              const res = (await fetch(url).then((res) => res.json())) as {
                response: {
                  drinks: TCocktail[];
                };
              };

              const cocktail = res.response.drinks[0];
              setCocktailData(cocktail);
            }}
          >
            Update!
          </Button>

          <Cocktail
            setIngredientData={setIngredientData}
            cocktail={cocktail}
            setIndex={setIndex}
          />
        </TabPanel>
        <TabPanel>
          <Button onClick={() => setIndex(0)}>Go to Cocktails</Button>
          {ingredient && <Ingredient ingredient={ingredient} />}
          {!ingredient && <Text fontSize="24">No data yet...</Text>}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
