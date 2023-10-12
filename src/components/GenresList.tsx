import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/getCroppedImage";
import GenresListSkeleton from "./GenresListSkeleton";

interface PropsGenreList {
  onSelectedGenre: (selectedGenre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ onSelectedGenre, selectedGenre }: PropsGenreList) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <GenresListSkeleton />;

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
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(genre)}
              variant={"link"}
              fontSize={"lg"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenresList;
