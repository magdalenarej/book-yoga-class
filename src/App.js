import "antd/dist/antd.css";
import { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookClassCalendar from "./components/BookClassCalendar";
import MainHeader from "./components/MainHeader";
import LoginRegisterCard from "./components/LoginRegisterCard";
import AddClass from "./components/AddClass";
import SideMenu from "./components/SideMenu";

import ClassesCard from "./components/Classes/ClassesCard";

const { Header, Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout style={{ height: "100vh", overflow: "scroll" }}>
        <Header
          style={{
            position: "fixed",
            zIndex: 2000,
            width: "100%",
            height: 100,
          }}
        >
          <MainHeader />
        </Header>
        <Layout style={{ marginTop: 100, marginLeft: 80 }}>
          <SideMenu />
          <Content>
            <Routes>
              <Route path="/" element={<LoginRegisterCard />}></Route>
              <Route path="book-class" element={<BookClassCalendar />}></Route>
              <Route path="add-class" element={<AddClass />}></Route>
              <Route path="/my-classes" element={<ClassesCard />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
