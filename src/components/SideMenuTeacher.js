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
        icon={<CalendarOutlined style={{ fontSize: 24 }} />}
        onClick={() => {
          navigate("/book-class");
        }}
        style={{ fontSize: 24 }}
      >
        Calendar
      </Menu.Item>
      <Menu.Item
        icon={<PlusCircleOutlined style={{ fontSize: 24 }} />}
        onClick={() => {
          navigate("/add-class");
        }}
        style={{ fontSize: 24 }}
      >
        Add class
      </Menu.Item>
      <Menu.Item
        icon={<ContactsOutlined style={{ fontSize: 24 }} />}
        onClick={() => {
          navigate("/my-classes");
        }}
        style={{ fontSize: 24 }}
      >
        My classes
      </Menu.Item>
      <Menu.Item
        icon={<LogoutOutlined style={{ fontSize: 24 }} />}
        onClick={onLogutHandler}
        style={{ fontSize: 24 }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default SideMenuTeacher;
