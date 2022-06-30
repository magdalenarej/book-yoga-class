import 'antd/dist/antd.css';
// import 'antd/dist/antd.min.css'
import BookClassCalendar from "./components/BookClassCalendar";
import {Layout} from "antd";


const {Content, Header} = Layout;

const App = () => {
    return <Layout>
        <Header></Header>
        <Content>
            <BookClassCalendar/>
        </Content>
    </Layout>;

};

export default App;