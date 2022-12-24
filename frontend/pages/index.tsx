import { Box, Container, Heading, Image, Link } from "@chakra-ui/react";
import { useState } from "react";
import { Navigation } from "../components/Navigation/Navigation";
import { config } from "../config";
import { TCocktail } from "../types/Cocktail";
import { TIngredient } from "../types/Ingredient";

type Props = {
  cocktail: TCocktail;
};

const Home: React.FC<Props> = ({ cocktail }) => {
  const [index, setIndex] = useState(0);

  const [cocktailsData, setCocktailData] = useState(cocktail);
  const [ingredientData, setIngredientData] = useState<undefined | TIngredient>(
    undefined
  );

  return (
    <Container maxWidth="container.xl">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading>Welcome to cocktails recipes list site!</Heading>
        <Box display="flex" alignItems="center">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/betelgeusexru"
          >
            <Box w="12" h="12">
              <Image src="/github.svg" alt="github" />
            </Box>
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/betelgeusexru"
          >
            <Box w="8" h="8">
              <Image src="/telegram.svg" alt="telegram" />
            </Box>
          </Link>
        </Box>
      </Box>

      <Box mt={4}>
        <Navigation
          index={index}
          cocktail={cocktailsData}
          ingredient={ingredientData}
          setIndex={setIndex}
          setIngredientData={setIngredientData}
          setCocktailData={setCocktailData}
        />
      </Box>
    </Container>
  );
};

export const getServerSideProps = async () => {
  const url = `${config.backend}/random_cocktail`;

  const res = (await fetch(url).then((res) => res.json())) as {
    response: {
      drinks: TCocktail[];
    };
  };

  const cocktail = res.response.drinks[0];

  return {
    props: {
      cocktail,
    },
  };
};

export default Home;
