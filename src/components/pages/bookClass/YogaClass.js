import { List } from "antd";
import { useSelector } from "react-redux";
import TeacherYogaClass from "./TeacherYogaClass";
import StudentYogaClass from "./StudentYogaClass";

const YogaClass = ({ yogaClass }) => {
  const user = useSelector((state) => state.user?.user);

  return (
    <List.Item>
      {user.isTeacher ? (
        <TeacherYogaClass yogaClass={yogaClass} />
      ) : (
        <StudentYogaClass yogaClass={yogaClass} />
      )}
    </List.Item>
  );
};

export default YogaClass;
