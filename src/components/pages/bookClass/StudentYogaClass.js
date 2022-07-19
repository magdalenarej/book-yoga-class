import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useBookClassMutation,
  useCancelBookingClassMutation,
} from "../../../store/api";
import { notification, Card, Button, Popconfirm } from "antd";

const StudentYogaClass = ({ yogaClass }) => {
  const [
    bookClass,
    { isLoading: isLoadingBooking },
  ] = useBookClassMutation();
  const [
    cancelBookingClass,
  ] = useCancelBookingClassMutation();

  const user = useSelector((state) => state.user.user);

  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    if (!yogaClass.students.length) {
      setIsBooked(false);
    } else {
      yogaClass.students.forEach((student) =>
        student?.id !== user?.id ? setIsBooked(false) : setIsBooked(true)
      );
    }
  }, [yogaClass, user]);

  const bookClassHanlder = () => {
    const students = [...yogaClass.students, user];
    const { id } = yogaClass;
    bookClass({ id, students });
    notification.success({
      message: "Class booked!",
      description: `${yogaClass.name} - ${yogaClass.date} - ${yogaClass.time}`,
      placement: "bottomRight",
    });
  };

  const cancelBookingHandler = () => {
    const students = yogaClass.students.filter(
      (student) => student.id !== user.id
    );
    const { id } = yogaClass;
    cancelBookingClass({ id, students });
    notification.error({
      message: "Canceled!",
      placement: "bottomRight",
    });
  };

  return (
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
          disabled={yogaClass.students.length >= yogaClass.spots}
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
  );
};

export default StudentYogaClass;
