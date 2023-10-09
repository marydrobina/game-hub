import { HStack, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformsIcons from "./PlatformsIcons";

interface PropsPlatformsIconsList {
  game: Game;
}
const PlatformsIconsList = ({ game }: PropsPlatformsIconsList) => {
  return (
    <>
      <HStack marginTop={"10px"}>
        {game.parent_platforms.map((pl) => (
          <PlatformsIcons key={pl.platform.id} platform={pl.platform} />
        ))}
      </HStack>
    </>
  );
};
export default PlatformsIconsList;
