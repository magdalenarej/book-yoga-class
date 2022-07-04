import "antd/dist/antd.css";
import BookClassCalendar from "./components/BookClassCalendar";
import { Layout } from "antd";

import SideMenu from "./components/SideMenu";

const { Content, Sider } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider>
        <SideMenu />
      </Sider>
      <Content>
        <BookClassCalendar />
      </Content>
    </Layout>
  );
};

export default App;
