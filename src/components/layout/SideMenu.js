import { useState } from "react";
import { Layout, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/userSlice";
import { itemsTeacher, itemsStudent } from "./MenuItems";

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

  if (!user) return;

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
      <Menu
        theme="dark"
        items={
          user.isTeacher
            ? itemsTeacher(navigate, onLogutHandler)
            : itemsStudent(navigate, onLogutHandler)
        }
      />
    </Sider>
  );
};

export default SideMenu;
