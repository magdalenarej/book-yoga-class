import {
  PlusCircleOutlined,
  CalendarOutlined,
  ContactsOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";

const SideMenuTeacher = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Menu theme="dark">
      <Menu.Item
        icon={<CalendarOutlined />}
        onClick={() => {
          navigate("/book-class");
        }}
      >
        Calendar
      </Menu.Item>
      <Menu.Item
        icon={<PlusCircleOutlined />}
        onClick={() => {
          navigate("/add-class");
        }}
      >
        Add class
      </Menu.Item>
      <Menu.Item
        icon={<ContactsOutlined />}
        onClick={() => {
          navigate("/my-classes");
        }}
      >
        My classes
      </Menu.Item>
      <Menu.Item icon={<LogoutOutlined />} onClick={onLogutHandler}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default SideMenuTeacher;
