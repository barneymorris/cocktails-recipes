import { Box } from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";
import { TIngredient } from "../../types/Ingredient";

type Props = {
  ingredient: TIngredient;
};

export const Ingredient: React.FC<Props> = ({ ingredient }) => {
  return (
    <Box w="100%">
      <Box mt="8">
        <Text textAlign="center" fontSize="36px">
          {ingredient.strIngredient}
        </Text>
      </Box>

      <Box>
        <Box mt="8">
          <Text textAlign="center" fontSize="36px">
            {ingredient.strDescription}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
