import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "../hooks/useGame";
import CardSkeletons from "./CardSkeletons";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface PropsGameGrid {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: PropsGameGrid) => {
  const { data, error, isLoading } = useGame(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error}</Text>;

  if (isLoading)
    return (
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
        {skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <CardSkeletons />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    );

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
export default GameGrid;
