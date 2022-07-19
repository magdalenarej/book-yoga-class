import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  PlusCircleOutlined,
  CalendarOutlined,
  ContactsOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/userSlice";

const { Sider } = Layout;

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const onLogutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!user) {
    return;
  }

  return (
    <Sider
      style={{
        overflow: "auto",
        zIndex: 2000,
        height: "100%",
        position: "fixed",
        left: 0,
        top: 100,
        bottom: 0,
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed((state) => !state)}
    >
      <Menu theme="dark">
        <Menu.Item
          icon={<CalendarOutlined style={{ fontSize: 24 }} />}
          onClick={() => {
            navigate("/book-class");
          }}
          style={{ fontSize: 18 }}
        >
          Calendar
        </Menu.Item>

        {user.isTeacher && (
          <Menu.Item
            icon={<PlusCircleOutlined style={{ fontSize: 24 }} />}
            onClick={() => {
              navigate("/add-class");
            }}
            style={{ fontSize: 18 }}
          >
            Add class
          </Menu.Item>
        )}
        <Menu.Item
          icon={<ContactsOutlined style={{ fontSize: 24 }} />}
          onClick={() => {
            navigate("/my-classes");
          }}
          style={{ fontSize: 18 }}
        >
          My classes
        </Menu.Item>
        <Menu.Item
          icon={<LogoutOutlined style={{ fontSize: 24 }} />}
          onClick={onLogutHandler}
          style={{ fontSize: 18 }}
        >
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
