import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useCancelClassMutation } from "../../../store/api";
import {
  Card,
  Button,
  Collapse,
  Popconfirm,
  notification,
  Typography,
} from "antd";
import CardContainer from "../../layout/CardContainer";
import ErrorCard from "../../error/ErrorCard";

const { Panel } = Collapse;
const { Title, Text, Paragraph } = Typography;


const TeacherYogaClass = ({ yogaClass }) => {
  const user = useSelector((state) => state.user.user);
  const [
    cancelClass,
    { isLoading, isSuccess, error },
  ] = useCancelClassMutation();
  const [isTeacherClass, setIsTeacherClass] = useState(false);

  useEffect(() => {
    if (yogaClass.teacher.id === user.id) {
      setIsTeacherClass(true);
    }
  }, [user, yogaClass.teacher.id]);

  useEffect(() => {
    if (isSuccess) {
      notification.error({
        message: "Canceled!",
        placement: "bottomRight",
      });
    }
  }, [isSuccess]);

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
      <Title level={4}>{yogaClass.name}</Title>
      <Text type="secondary">
        Teacher: {yogaClass.teacher.name} {yogaClass.teacher.surname}
      </Text>
      <Paragraph>
        Date - {yogaClass.date} - Time: {yogaClass.time} - Free spots:{" "}
        {yogaClass.spots - yogaClass.students.length}
      </Paragraph>
      {!!yogaClass.students.length && isTeacherClass && (
        <Collapse ghost={true} style={{ marginBottom: 8 }}>
          <Panel header="students:">
            {yogaClass.students.map((student) => {
              return (
                <Text key={student.id}>
                  {student.name} {student.surname}
                </Text>
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
