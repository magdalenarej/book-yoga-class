import { Button, Image } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import userPng from "../img/logo.png";

const MainHeader = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        src={userPng}
        preview={false}
        alt="book yoga calss logo"
        style={{ height: 100 }}
      />
      {user ? (
        <Button shape="round" size="large">
          Logout
        </Button>
      ) : (
        <Button shape="round" size="large" onClick={() => navigate("/")}>
          Login or register
        </Button>
      )}
    </div>
  );
};

export default MainHeader;
