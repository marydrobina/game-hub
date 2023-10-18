import { Image, HStack } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorThemeSwitch from "./ColorThemeSwitch";
import SearchInput from "./SearchInput";

interface PropsNavBar {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: PropsNavBar) => {
  return (
    <HStack justifyContent={"space-between"} marginBottom={"1rem"}>
      <Image
        src={logo}
        width={"100%"}
        height={"100%"}
        boxSize={"70px"}
        objectFit={"cover"}
      />
      <SearchInput handleSubmit={onSearch} />
      <ColorThemeSwitch />
    </HStack>
  );
};
export default NavBar;
