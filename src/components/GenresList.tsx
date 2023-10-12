import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/getCroppedImage";
import GenresListSkeleton from "./GenresListSkeleton";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <GenresListSkeleton></GenresListSkeleton>;

  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY={"7px"} key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={"8px"}
              src={getCroppedImage(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenresList;
