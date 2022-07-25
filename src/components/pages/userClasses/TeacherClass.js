import { useState } from "react";
import { List, Button, Popconfirm } from "antd";
import { useCancelClassMutation } from "../../../store/api";
import StudentsList from "./StudentsList";
import ErrorCard from "../../error/ErrorCard";

const TeacherClass = ({ yogaClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cancelClass, { isLoading, error }] = useCancelClassMutation();

  const onShowModal = () => setIsVisible((state) => !state);
  const onCancelClassHandler = () => {
    const { id } = yogaClass;
    cancelClass({ id });
  };

  if (error) {
    return <ErrorCard />;
  }

  return (
    <List.Item style={{ padding: 24 }}>
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
