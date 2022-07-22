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

  const itemsTeacher = [
    {
      key: 1,
      label: "Calendar",
      onClick: () => {
        navigate("/book-class");
      },
      icon: <CalendarOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
    {
      key: 2,
      label: "Add class",
      onClick: () => {
        navigate("/add-class");
      },
      icon: <PlusCircleOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
    {
      key: 3,
      label: "My classes",
      onClick: () => {
        navigate("/my-classes");
      },
      icon: <ContactsOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
    {
      key: 4,
      label: "Logout",
      onClick: () => {
        onLogutHandler();
      },
      icon: <LogoutOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
  ];

  const itemsStudent = [
    {
      key: 1,
      label: "Calendar",
      onClick: () => {
        navigate("/book-class");
      },
      icon: <CalendarOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
    {
      key: 2,
      label: "My classes",
      onClick: () => {
        navigate("/my-classes");
      },
      icon: <ContactsOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
    {
      key: 3,
      label: "Logout",
      onClick: () => {
        onLogutHandler();
      },
      icon: <LogoutOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
  ];

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
      <Menu theme="dark" items={user.isTeacher ? itemsTeacher : itemsStudent} />
    </Sider>
  );
};

export default SideMenu;
