import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookClassCalendar from "./components/pages/bookClass/BookClassCalendar";
import MainHeader from "./components/layout/MainHeader";
import LoginTabCard from "./components/pages/login/LoginTabCard";
import AddClass from "./components/pages/addClass/AddClass";
import SideMenu from "./components/layout/SideMenu";
import ClassesCard from "./components/pages/userClasses/ClassesCard";

const { Header, Content } = Layout;

const loyoutStyle = { height: "100vh", overflow: "scroll" };
const headerStyle = {
  position: "fixed",
  zIndex: 2000,
  width: "100%",
  height: 100,
};
const contentLoyoutStyle = { marginTop: 100, marginLeft: 80 };

const App = () => {
  return (
    <BrowserRouter>
      <Layout style={loyoutStyle}>
        <Header style={headerStyle}>
          <MainHeader />
        </Header>
        <Layout style={contentLoyoutStyle}>
          <SideMenu />
          <Content>
            <Routes>
              <Route path="/" element={<LoginTabCard />}></Route>
              <Route path="book-class" element={<BookClassCalendar />}></Route>
              <Route path="add-class" element={<AddClass />}></Route>
              <Route path="my-classes" element={<ClassesCard />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
