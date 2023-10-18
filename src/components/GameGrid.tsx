import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "../hooks/useGame";
import CardSkeletons from "./CardSkeletons";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface PropsGameGrid {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: PropsGameGrid) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error}</Text>;

  if (isLoading)
    return (
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <CardSkeletons />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    );

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
export default GameGrid;
