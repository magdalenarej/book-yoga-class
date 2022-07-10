import { useLoginUserMutation } from "../store/api";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, { isLoading, data, error }] = useLoginUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async (values) => {
    try {
      const response = await login(values);
      dispatch(setCredentials(response.data));
      navigate("/book-class");
    } catch (err) {
      console.log(err);
    }
  };

  const onFinish = (values) => {
    loginHandler(values);
  };

  return (
    <Form
      layout="vertical"
      onFinish={(values) => {
        onFinish(values);
      }}
    >
      <Form.Item
        name="email"
        label="E-mail"
        initialValue={"jan@kowalski.pl"}
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        initialValue={"1234567"}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
