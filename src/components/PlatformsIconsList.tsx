import { HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformsIcons from "./PlatformsIcons";

interface PropsPlatformsIconsList {
  game: Game;
}
const PlatformsIconsList = ({ game }: PropsPlatformsIconsList) => {
  return (
    <>
      <HStack>
        {game.parent_platforms.map((pl) => (
          <PlatformsIcons key={pl.platform.id} platform={pl.platform} />
        ))}
      </HStack>
    </>
  );
};
export default PlatformsIconsList;
