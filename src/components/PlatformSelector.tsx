import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface PropsPlatformSelector {
  onselectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onselectedPlatform,
  selectedPlatform,
}: PropsPlatformSelector) => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Menu>
      <MenuButton marginBottom={3} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform?.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            as={Button}
            onClick={() => onselectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default PlatformSelector;
