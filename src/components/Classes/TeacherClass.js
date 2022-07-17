import { useState } from "react";
import { List, Button, Popconfirm } from "antd";
import StudentsList from "./StudentsList";
import { useCancelClassMutation } from "../../store/api";

const TeacherClass = ({ yogaClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cancelClass, { isLoading }] = useCancelClassMutation();

  const onShowModal = () => setIsVisible((state) => !state);
  const onCancelClassHandler = () => {
    const { id } = yogaClass;
    cancelClass({ id });
  };

  return (
    <List.Item>
      <List.Item.Meta
        title={yogaClass.name}
        description={`Date: ${yogaClass.date} - Time: ${
          yogaClass.time
        } - Available spots: ${yogaClass.spots - yogaClass.students.length}`}
      />
      <Button
        type="primary"
        disabled={!yogaClass.students.length}
        onClick={onShowModal}
      >
        List of students
      </Button>
      <Popconfirm
        placement="rightBottom"
        title="Are you sure?"
        onConfirm={onCancelClassHandler}
      >
        <Button type="danger" loading={isLoading}>
          Cancel class!
        </Button>
      </Popconfirm>
      <StudentsList
        students={yogaClass.students}
        isVisible={isVisible}
        onShowModal={onShowModal}
      />
    </List.Item>
  );
};

export default TeacherClass;
