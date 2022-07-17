import { CloseSquareOutlined } from "@ant-design/icons";
import { List, Result, Button } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useClassesQuery } from "../../store/api";

import UserClass from "./UserClass";

const UsersClasses = () => {
  const userId = useSelector((state) => state.user.user?.id);
  const { data, error, isLoading, isSuccess } = useClassesQuery();

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
  }, [data]);

  if (!data) return;
  if (!classes.length)
    return (
      <Result
        icon={<CloseSquareOutlined />}
        title="You didn't book any classes"
        extra={
          <Button type="primary" onClick={() => navigate("/book-class")}>
            Book class
          </Button>
        }
      />
    );

  return (
    <List>
      {classes.map((cls) => (
        <UserClass key={cls.id} yogaClass={cls} />
      ))}
    </List>
  );
};

export default UsersClasses;
