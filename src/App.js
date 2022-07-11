import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookClassCalendar from "./components/BookClassCalendar";
import MainHeader from "./components/MainHeader";
import LoginRegisterCard from "./components/LoginRegisterCard";

const { Header, Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ height: 100 }}>
          <MainHeader />
        </Header>
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
