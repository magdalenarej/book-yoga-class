import { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import Login from "./Login";
import Register from "./Register";
import Logged from "./Logged";

const cardStyle = { maxWidth: 600, margin: "0 auto", marginTop: 32 };

const LoginTabCard = () => {
  const [activeTab, setActiveTab] = useState("login");

  const user = useSelector((state) => state.user.user);

  const onTabChange = (key) => setActiveTab(key);

  const tabList = [
    { key: "login", tab: "login" },
    { key: "register", tab: "register" },
  ];
  const contentList = {
    login: <Login />,
    register: <Register />,
  };

  if (user) {
    return <Logged />;
  }

  return (
    <Card
      style={cardStyle}
      tabList={tabList}
      activeTabKey={activeTab}
      onTabChange={(key) => onTabChange(key)}
    >
      {contentList[activeTab]}
    </Card>
  );
};

export default LoginTabCard;
