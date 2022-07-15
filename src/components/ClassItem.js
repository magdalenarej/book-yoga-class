import { useEffect, useState } from "react";
import { List, Button, Popconfirm, notification, Card, Collapse } from "antd";
import {
  useBookClassMutation,
  useClassesQuery,
  useCancelBookingClassMutation,
  useCancelClassMutation,
} from "../store/api";
import { useSelector } from "react-redux";
const { Panel } = Collapse;

const ClassItem = ({ yogaClass }) => {
  const [isBooked, setIsBooked] = useState(false);
  const [isTeachersClass, setIsTeachersClas] = useState(false);
  const { data, error, isLoading, isSuccess } = useClassesQuery();
  const [
    bookClass,
    { isLoading: isLoadingBooking, isSuccess: isSuccessBooking },
  ] = useBookClassMutation();

  const [
    cancelBookingClass,
    { isSuccess: isSuccessCancelBooking },
  ] = useCancelBookingClassMutation();
  const [cancelClass] = useCancelClassMutation();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!yogaClass.students.length) {
      setIsBooked(false);
    } else {
      yogaClass.students.forEach((student) =>
        student?.id !== user?.id ? setIsBooked(false) : setIsBooked(true)
      );
    }
  }, [data, user]);

  useEffect(() => {
    if (yogaClass.teacher.id === user.id) {
      setIsTeachersClas(true);
    }
  }, [user]);

  const bookClassHanlder = (e, yogaClass) => {
    e.preventDefault();
    const students = [...yogaClass.students, user];
    const { id } = yogaClass;
    bookClass({ id, students });
    notification.success({
      message: "Class booked!",
      description: `${yogaClass.name} - ${yogaClass.date} - ${yogaClass.time}`,
    });
  };

  const cancelBookingHandler = (e, yogaClass) => {
    e.preventDefault();
    const students = yogaClass.students.filter(
      (student) => student.id !== user.id
    );
    const { id } = yogaClass;
    cancelBookingClass({ id, students });
    notification.error({
      message: "Canceled!",
    });
  };

  const onCancelClassHandler = () => {
    const { id } = yogaClass;
    cancelClass({ id });
  };

  return (
    <List.Item>
      {user.isTeacher ? (
        <Card bordered={false}>
          <h2>{yogaClass.name}</h2>
          <h4>
            Teacher: {yogaClass.teacher.name} {yogaClass.teacher.surname}
          </h4>
          <h4>Time: {yogaClass.time}</h4>
          <h4>Date: {yogaClass.date}</h4>
          <h4>Free spots: {yogaClass.spots - yogaClass.students.length}</h4>
          {!!yogaClass.students.length && (
            <Collapse ghost={true}>
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
            <Button
              disabled={!isTeachersClass}
              type="danger"
              loading={isLoadingBooking}
            >
              Cancel class!
            </Button>
          </Popconfirm>
        </Card>
      ) : (
        <Card bordered={false}>
          <h2>{yogaClass.name}</h2>
          <h4>
            Teacher: {yogaClass.teacher?.name} {yogaClass.teacher?.surname}
          </h4>
          <h4>Time: {yogaClass.time}</h4>
          <h4>Date: {yogaClass.date}</h4>
          <h4>Free spots: {yogaClass.spots - yogaClass.students.length}</h4>
          {!isBooked ? (
            <Button
              type="primary"
              loading={isLoadingBooking}
              onClick={(e) => {
                bookClassHanlder(e, yogaClass);
              }}
            >
              Book class!
            </Button>
          ) : (
            <Popconfirm
              placement="rightBottom"
              title="Are you sure?"
              onConfirm={(e) => cancelBookingHandler(e, yogaClass)}
            >
              <Button type="danger">Cancel booking</Button>
            </Popconfirm>
          )}
        </Card>
      )}
    </List.Item>
  );
};

export default ClassItem;
