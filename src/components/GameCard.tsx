import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformsIconsList from "./PlatformsIconsList";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading size="xl">{game.name}</Heading>
        <PlatformsIconsList game={game} />
      </CardBody>
    </Card>
  );
};
export default GameCard;
