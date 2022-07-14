import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useClassesQuery } from "../store/api";

const UsersClasses = () => {
  const userId = useSelector((state) => state.user.user?.id);
  const { data, error, isLoading, isSuccess } = useClassesQuery();
  console.log(data);

  const [classes, setClasses] = useState([]);

  const list = [];
  useEffect(() => {
    data.forEach((yogaClass) =>
      yogaClass.students.forEach((student) => {
        if (student.id === userId) {
          list.push(yogaClass);
        }
      })
    );
    setClasses(list);
  }, []);

  if (!data) return;
  if (!classes.length) return;

  return (
    <div>
      {classes.map((cls) => (
        <li>{cls.name}</li>
      ))}
    </div>
  );
};

export default UsersClasses;
