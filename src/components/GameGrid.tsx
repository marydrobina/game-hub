import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "../hooks/useGame";
import CardSkeletons from "./CardSkeletons";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {isLoading && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
          {skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <CardSkeletons />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
