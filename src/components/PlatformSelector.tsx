import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Menu>
      <MenuButton marginBottom={3} as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default PlatformSelector;
