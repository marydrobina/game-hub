import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenresListSkeleton = () => {
  const list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <List>
      {list.map((item) => (
        <ListItem paddingY={"7px"} key={item}>
          <HStack>
            <Skeleton boxSize={"32px"} borderRadius={"8px"}></Skeleton>
            <SkeletonText width={20}></SkeletonText>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenresListSkeleton;
