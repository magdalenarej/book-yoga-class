import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useCancelClassMutation } from "../../../store/api";
import { Card, Button, Collapse, Popconfirm } from "antd";
import CardContainer from "../../layout/CardContainer";
import ErrorCard from "../../error/ErrorCard";
const { Panel } = Collapse;

const TeacherYogaClass = ({ yogaClass }) => {
  const user = useSelector((state) => state.user.user);
  const [cancelClass, { isLoading, error }] = useCancelClassMutation();
  const [isTeacherClass, setIsTeacherClass] = useState(false);

  useEffect(() => {
    if (yogaClass.teacher.id === user.id) {
      setIsTeacherClass(true);
    }
  }, [user]);

  const onCancelClassHandler = () => {
    const { id } = yogaClass;
    cancelClass({ id });
  };

  if (error) {
    return (
      <CardContainer>
        <ErrorCard />
      </CardContainer>
    );
  }

  return (
    <Card bordered={false}>
      <h2>{yogaClass.name}</h2>
      <h4>
        Teacher: {yogaClass.teacher.name} {yogaClass.teacher.surname}
      </h4>
      <h4>
        Date - {yogaClass.date} - Time: {yogaClass.time} - Free spots:{" "}
        {yogaClass.spots - yogaClass.students.length}
      </h4>
      {!!yogaClass.students.length && isTeacherClass && (
        <Collapse ghost={true} style={{ padding: 8, marginBottom: 8 }}>
          <Panel header="students:">
            {yogaClass.students.map((student) => {
              return (
                <h4 key={student.id}>
                  {student.name} {student.surname}
                </h4>
              );
            })}
          </Panel>
        </Collapse>
      )}
      <Popconfirm
        placement="rightBottom"
        title="Are you sure?"
        onConfirm={onCancelClassHandler}
      >
        <Button disabled={!isTeacherClass} type="danger" loading={isLoading}>
          Cancel class!
        </Button>
      </Popconfirm>
    </Card>
  );
};

export default TeacherYogaClass;
