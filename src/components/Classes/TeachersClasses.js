import { List } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useClassesQuery } from "../../store/api";

import TeacherClass from "./TeacherClass";

const TeachersClasses = () => {
  const { data, error, isLoading, isSuccess } = useClassesQuery();
  const user = useSelector((state) => state.user.user);
  const [classes, setClasses] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const list = [];
    data.forEach((yogaClass) => {
      if (yogaClass.teacher.id === user.id) {
        list.push(yogaClass);
      }
    });
    console.log(list);
    setClasses(list);
  }, [data]);

  return (
    <List itemLayout="vertical" dataSource={classes}>
      {classes.map((yogaClass) => (
        <TeacherClass key={yogaClass.id} yogaClass={yogaClass} />
      ))}
    </List>
  );
};

export default TeachersClasses;
