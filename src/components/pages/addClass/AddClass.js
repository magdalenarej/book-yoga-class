import dayjs from "dayjs";
import { Button, DatePicker, Form, Input } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddClassMutation } from "../../../store/api";
import CardContainer from "../../layout/CardContainer";
import Warning from "../../error/Warning";
import ErrorCard from "../../error/ErrorCard";

const AddClass = () => {
  const [addClass, { error, isLoading }] = useAddClassMutation();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const addNewClassHandler = (values) => {
    const newClass = {
      name: values.name,
      spots: values.spots,
      students: [],
      date: dayjs(values.date).format("DD-MM-YYYY"),
      time: dayjs(values.date).format("HH:mm"),
      teacher: { name: user.name, surname: user.surname, id: user.id },
    };
    addClass(newClass);
    navigate("/book-class");
  };

  if (!user) {
    return <Warning />;
  }

  if (error) {
    return <ErrorCard />;
  }

  return (
    <CardContainer>
      <Form layout="vertical" onFinish={(values) => addNewClassHandler(values)}>
        <Form.Item
          label="Name of class"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input name of classes!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Available spots"
          name="spots"
          rules={[
            {
              required: true,
              message: "Please input available spots!",
            },
          ]}
        >
          <Input type={"number"} />
        </Form.Item>
        <Form.Item label="Date" name="date">
          <DatePicker format="DD-MM-YYYY HH:mm" showTime={true} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Add new class!
          </Button>
        </Form.Item>
      </Form>
    </CardContainer>
  );
};

export default AddClass;
