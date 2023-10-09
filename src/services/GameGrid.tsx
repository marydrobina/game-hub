import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "../components/GameCard";
import useGame from "../hooks/useGame";
const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
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
