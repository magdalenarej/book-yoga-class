import { useState } from "react";
import { Card } from "antd";
import Login from "./Login";
import Register from "./Register";

const LoginTabCard = () => {
  const [activeTab, setActiveTab] = useState("login");

  const onTabChange = (key) => setActiveTab(key);

  const tabList = [
    { key: "login", tab: "login" },
    { key: "register", tab: "register" },
  ];
  const contentList = {
    login: <Login />,
    register: <Register />,
  };

  return (
    <Card
      style={{ maxWidth: 600, margin: "0 auto", marginTop: 32 }}
      tabList={tabList}
      activeTabKey={activeTab}
      onTabChange={(key) => {
        onTabChange(key);
      }}
    >
      {contentList[activeTab]}
    </Card>
  );
};

export default LoginTabCard;
