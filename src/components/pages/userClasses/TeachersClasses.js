import { List } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useClassesQuery } from "../../../store/api";
import ErrorCard from "../../error/ErrorCard";

import TeacherClass from "./TeacherClass";

const TeachersClasses = () => {
  const { data, error } = useClassesQuery();
  const user = useSelector((state) => state.user.user);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const list = [];
    data.forEach((yogaClass) => {
      if (yogaClass.teacher.id === user.id) {
        list.push(yogaClass);
      }
    });
    setClasses(list);
  }, [data]);

  if (error) {
    return <ErrorCard />;
  }

  return (
    <List
      itemLayout="vertical"
      dataSource={classes}
      renderItem={(cls) => <TeacherClass key={cls.id} yogaClass={cls} />}
    />
  );
};

export default TeachersClasses;
