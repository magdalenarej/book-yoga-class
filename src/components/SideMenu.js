import { Image } from "antd";

import userPng from "../img/logo.png";

const SideMenu = () => {
  return (
    <>
      <Image src={userPng} preview={false} alt="book yoga calss logo" />
    </>
  );
};

export default SideMenu;
