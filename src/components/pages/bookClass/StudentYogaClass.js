import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useBookClassMutation,
  useCancelBookingClassMutation,
} from "../../../store/api";
import { notification, Card, Button, Popconfirm, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

const StudentYogaClass = ({ yogaClass }) => {
  const [
    bookClass,
    { isLoading: isLoadingBooking, isSuccess: isSuccessBooking },
  ] = useBookClassMutation();
  const [
    cancelBookingClass,
    { isSuccess: isSuccessCanceling, isLoading: isLoadingCanceling },
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

  useEffect(() => {
    if (isSuccessBooking) {
      notification.success({
        message: "Class booked!",
        description: `${yogaClass.name} - ${yogaClass.date} - ${yogaClass.time}`,
        placement: "bottomRight",
      });
    }
  }, [isSuccessBooking]);

  useEffect(() => {
    if (isSuccessCanceling) {
      notification.error({
        message: "Canceled!",
        placement: "bottomRight",
      });
    }
  }, [isSuccessCanceling]);

  const bookClassHanlder = () => {
    const students = [...yogaClass.students, user];
    const { id } = yogaClass;
    bookClass({ id, students });
  };

  const cancelBookingHandler = () => {
    const students = yogaClass.students.filter(
      (student) => student.id !== user.id
    );
    const { id } = yogaClass;
    cancelBookingClass({ id, students });
  };

  return (
    <Card bordered={false}>
      <Title level={4}>{yogaClass.name}</Title>
      <Text type="secondary">
        Teacher: {yogaClass.teacher?.name} {yogaClass.teacher?.surname}
      </Text>
      <Paragraph type="strong">
        Time: {yogaClass.time} - Date: {yogaClass.date} - Free spots:{" "}
        {yogaClass.spots - yogaClass.students.length}
      </Paragraph>
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
          <Button type="danger" loading={isLoadingCanceling}>
            Cancel booking
          </Button>
        </Popconfirm>
      )}
    </Card>
  );
};

export default StudentYogaClass;
