import { Button, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/userSlice";
import userPng from '../../assets/logo.png'

const MainHeader = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

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
        onClick={() => navigate("/book-class")}
      />

      <div>
        {user ? (
          <Button size="large" onClick={onLogutHandler}>
            Logout
          </Button>
        ) : (
          <Button size="large" onClick={() => navigate("/")}>
            Login or register
          </Button>
        )}
      </div>
    </div>
  );
};

export default MainHeader;
