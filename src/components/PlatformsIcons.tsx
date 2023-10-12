import { Platform } from "../hooks/usePlatforms";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface PropsPlatformsIcons {
  platform: Platform;
}

const PlatformsIcons = ({ platform }: PropsPlatformsIcons) => {
  const platformsIconsCorrelation: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <Icon as={platformsIconsCorrelation[platform.slug]} color={"gray.500"} />
  );
};
export default PlatformsIcons;
