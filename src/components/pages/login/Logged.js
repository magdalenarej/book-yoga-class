import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardContainer from "../../layout/CardContainer";

const Logged = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  return (
    <CardContainer>
      {user.isTeacher ? (
        <Result
          icon={<SmileOutlined />}
          title={`Hello ${user.name}! You can check out your yoga classes!`}
          extra={
            <Button type="primary" onClick={() => navigate("/my-classes")}>
              My classes
            </Button>
          }
        />
      ) : (
        <Result
          icon={<SmileOutlined />}
          title={`Hello ${user.name}! You can book your favorite yoga class!`}
          extra={
            <Button type="primary" onClick={() => navigate("/book-class")}>
              Book class
            </Button>
          }
        />
      )}
    </CardContainer>
  );
};

export default Logged;
