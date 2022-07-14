import { useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import SideMenuTeacher from "./SideMenuTeacher";
import SideMenuStudent from "./SideMenuStudent";
import { useSelector } from "react-redux";

const { Sider } = Layout;

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  if (!user) {
    return;
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed((state) => !state)}
    >
      {user.isTeacher ? <SideMenuTeacher /> : <SideMenuStudent />}
    </Sider>
  );
};

export default SideMenu;
