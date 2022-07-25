import { CloseSquareOutlined } from "@ant-design/icons";
import { List, Result, Button } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useClassesQuery } from "../../../store/api";
import ErrorCard from "../../error/ErrorCard";
import UserClass from "./UserClass";

const UsersClasses = () => {
  const userId = useSelector((state) => state.user.user?.id);
  const { data, error } = useClassesQuery();

  const navigate = useNavigate();

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const list = [];
    data.forEach((yogaClass) =>
      yogaClass.students.forEach((student) => {
        if (student.id === userId) {
          list.push(yogaClass);
        }
      })
    );
    setClasses(list);
  }, [data, userId]);

  if (error) {
    return <ErrorCard />;
  }

  if (!classes.length)
    return (
      <Result
        icon={<CloseSquareOutlined />}
        title="You don't have any booked classes!"
        extra={
          <Button type="primary" onClick={() => navigate("/book-class")}>
            Book class
          </Button>
        }
      />
    );

  return (
    <List
      itemLayout="vertical"
      dataSource={classes}
      renderItem={(cls) => <UserClass key={cls.id} yogaClass={cls} />}
    />
  );
};

export default UsersClasses;
