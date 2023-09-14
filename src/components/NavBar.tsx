import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <div>
      <Image src={logo} boxSize={"82px"} />
    </div>
  );
};
export default NavBar;
