import "antd/dist/antd.css";
import { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookClassCalendar from "./components/BookClassCalendar";
import MainHeader from "./components/MainHeader";
import LoginRegisterCard from "./components/LoginRegisterCard";
import AddClass from "./components/AddClass";
import SideMenu from "./components/SideMenu";
import UsersClasses from "./components/UsersClasses";

const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <BrowserRouter>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ height: 100 }}>
          <MainHeader />
        </Header>
        <Layout>
          <SideMenu />
          <Content>
            <Routes>
              <Route path="/" element={<LoginRegisterCard />}></Route>
              <Route path="book-class" element={<BookClassCalendar />}></Route>
              <Route path="add-class" element={<AddClass />}></Route>
              <Route path="/my-classes" element={<UsersClasses />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
