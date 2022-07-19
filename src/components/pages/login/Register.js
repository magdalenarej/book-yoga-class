import { Form, Input, Button, Radio, Alert } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../../store/api"; 
import { setCredentials } from "../../../store/userSlice"; 

const Register = () => {
  const [registerUser, { error }] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = useState(null);

  useEffect(() => {
    error ? setAlertMsg(error.data) : setAlertMsg(null);
  }, [error]);

  const registerHandler = async (values) => {
    try {
      const response = await registerUser(values);

      dispatch(setCredentials(response.data));
      navigate("/book-class");
    } catch (err) {
      console.log(err);
    }
  };

  const onFinish = (values) => {
    registerHandler(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="surname"
        label="Surname"
        rules={[
          {
            required: true,
            message: "Please input your surname!",
          },
        ]}
      >
        <Input />
      </Form.Item>
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
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="isTeacher"
        label="Role"
        rules={[{ required: true, message: "Please pick your type!" }]}
      >
        <Radio.Group>
          <Radio.Button value={false}>Student</Radio.Button>
          <Radio.Button value={true}>Teacher</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
      </Form.Item>
      {alertMsg && <Alert message={alertMsg} type="error" />}
    </Form>
  );
};

export default Register;
