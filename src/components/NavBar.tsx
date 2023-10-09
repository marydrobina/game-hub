import { Image, HStack } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorThemeSwitch from "./ColorThemeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px 10px"}>
      <Image
        src={logo}
        width={"100%"}
        height={"100%"}
        boxSize={"70px"}
        objectFit={"cover"}
      />
      <ColorThemeSwitch />
    </HStack>
  );
};
export default NavBar;
