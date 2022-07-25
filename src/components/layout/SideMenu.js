import { useState } from "react";
import { Layout, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/userSlice";
import { createMenuItemsTeacher, createMenuItemsStudent } from "./MenuItems";

const { Sider } = Layout;

const siderStyle = {
  overflow: "auto",
  zIndex: 2000,
  height: "100%",
  position: "fixed",
  left: 0,
  top: 100,
  bottom: 0,
};

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const onLogutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!user) return;

  return (
    <Sider
      style={siderStyle}
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed((state) => !state)}
    >
      <Menu
        theme="dark"
        items={
          user.isTeacher
            ? createMenuItemsTeacher(navigate, onLogutHandler)
            : createMenuItemsStudent(navigate, onLogutHandler)
        }
      />
    </Sider>
  );
};

export default SideMenu;
