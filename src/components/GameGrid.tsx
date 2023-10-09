import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "../hooks/useGame";
import CardSkeletons from "./CardSkeletons";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {isLoading && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
          {skeletons.map((skeleton) => (
            <CardSkeletons key={skeleton} />
          ))}
        </SimpleGrid>
      )}
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
