import { useLoginUserMutation } from "../store/api";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/userSlice";

const Login = () => {
  const [login, { isLoading, data, error }] = useLoginUserMutation();

  const disptach = useDispatch();

  const loginHandler = async (values) => {
    try {
      const user = await login(values);
      disptach(setCredentials(user));
      // navigate("/");
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
