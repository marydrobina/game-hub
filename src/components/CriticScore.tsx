import { Badge } from "@chakra-ui/react";

interface PropsCriticScore {
  score: number;
}

const CriticScore = ({ score }: PropsCriticScore) => {
  const color = score >= 85 ? "green" : score >= 60 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      marginRight={"5px"}
      fontSize={"15px"}
      fontWeight={"normal"}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};
export default CriticScore;
