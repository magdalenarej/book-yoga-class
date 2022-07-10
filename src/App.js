import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookClassCalendar from "./components/BookClassCalendar";
import SideMenu from "./components/SideMenu";
import LoginRegisterCard from "./components/LoginRegisterCard";

const { Content, Sider } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Sider>
          <SideMenu />
        </Sider>
        <Content>
          <Routes>
            <Route path="/" element={<LoginRegisterCard />}></Route>
            <Route path="book-class" element={<BookClassCalendar />}></Route>
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
