import { useEffect, useState } from "react";
import { List, Button, Popconfirm, notification } from "antd";
import {
  useBookClassMutation,
  useClassesQuery,
  useCancelClassMutation,
} from "../store/api";
import { useSelector } from "react-redux";

const ClassItem = ({ yogaClass }) => {
  const [isBooked, setIsBooked] = useState(false);
  const { data, error, isLoading, isSuccess } = useClassesQuery();
  const [
    bookClass,
    { isLoading: isLoadingBooking, isSuccess: isSuccessBooking },
  ] = useBookClassMutation();
  const [
    cancelClass,
    { isSuccess: isSuccessCanceling },
  ] = useCancelClassMutation();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!yogaClass.students.length) {
      setIsBooked(false);
    } else {
      yogaClass.students.forEach((student) =>
        student.id !== user.id ? setIsBooked(false) : setIsBooked(true)
      );
    }
  }, [data, isSuccessCanceling, isSuccessBooking]);

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

  const cancelClassHandler = (e, yogaClass) => {
    e.preventDefault();
    const students = yogaClass.students.filter(
      (student) => student.id !== user.id
    );
    const { id } = yogaClass;
    cancelClass({ id, students });
  };

  return (
    <List.Item>
      <List.Item.Meta title={yogaClass.name} />
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
          onConfirm={(e) => cancelClassHandler(e, yogaClass)}
        >
          <Button type="danger">Cancel class</Button>
        </Popconfirm>
      )}
    </List.Item>
  );
};

export default ClassItem;
