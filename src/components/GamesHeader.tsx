import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface PropsGamesHeader {
  gameQuery: GameQuery;
}

const GamesHeader = ({ gameQuery }: PropsGamesHeader) => {
  return (
    <Heading marginBottom={6} fontSize={"5xl"} as="h1">
      {gameQuery.platform?.name || ""} {gameQuery.genre?.name || ""} Games
    </Heading>
  );
};
export default GamesHeader;
