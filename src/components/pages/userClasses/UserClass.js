import { CloseCircleOutlined } from "@ant-design/icons";
import { List, Button, Popconfirm, notification } from "antd";
import { useSelector } from "react-redux";
import { useCancelBookingClassMutation } from "../../../store/api";

const UserClass = ({ yogaClass }) => {
  const [
    cancelBookingClass,
    { isLoading, error },
  ] = useCancelBookingClassMutation();

  const user = useSelector((state) => state.user.user);

  const cancelBookingHandler = () => {
    const students = yogaClass.students.filter(
      (student) => student.id !== user.id
    );
    const { id } = yogaClass;
    cancelBookingClass({ id, students });
    notification.error({
      message: "Booking canceled!",
      placement: "bottomRight",
    });
  };

  return (
    <List.Item style={{ padding: 24 }}>
      <List.Item.Meta
        title={yogaClass.name.toUpperCase()}
        description={`Date: ${yogaClass.date} - Time: ${
          yogaClass.time
        } - Available spots: ${yogaClass.spots - yogaClass.students.length}`}
      />

      <Popconfirm
        placement="rightBottom"
        title="Are you sure?"
        onConfirm={cancelBookingHandler}
      >
        <Button
          type="danger"
          loading={isLoading}
          icon={<CloseCircleOutlined />}
        >
          Cancel booking class!
        </Button>
      </Popconfirm>
    </List.Item>
  );
};

export default UserClass;
