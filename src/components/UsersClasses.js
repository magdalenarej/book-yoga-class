import { Card } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useClassesQuery } from "../store/api";
import ClassItem from "./ClassItem";
import TeachersClasses from "./Classes/TeachersClasses";

const UsersClasses = () => {
  const userId = useSelector((state) => state.user.user?.id);
  const { data, error, isLoading, isSuccess } = useClassesQuery();

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
  if (!classes.length) return;

  return (
    <Card>
      {classes.map((cls) => (
        <ClassItem yogaClass={cls} />
      ))}
    </Card>
  );
};

export default UsersClasses;
