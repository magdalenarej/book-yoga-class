import { useLoginUserMutation } from "../../../store/api";
import { Form, Input, Button, Alert } from "antd";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const [login, { isLoading, error }] = useLoginUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = useState(null);

  useEffect(() => {
    error ? setAlertMsg(error.data) : setAlertMsg(null);
  }, [error]);

  const loginHandler = async (values) => {
    try {
      const response = await login(values);
      dispatch(setCredentials(response.data));
      navigate("/book-class");
    } catch (err) {
      console.log(error);
    }
  };

  const onFinish = (values) => {
    loginHandler(values);
  };

  return (
    <Form layout="vertical" onFinish={(values) => onFinish(values)}>
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
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={isLoading}
        >
          Log in
        </Button>
      </Form.Item>
      {alertMsg && <Alert message={alertMsg} type="error" />}
    </Form>
  );
};

export default Login;
