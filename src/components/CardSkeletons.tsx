import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardSkeletons = () => {
  return (
    <Card height={"300px"} width={"100%"}>
      <Skeleton></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};
export default CardSkeletons;
