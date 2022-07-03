import { List, Modal } from "antd";
import dayjs from "dayjs";
import { useClassesQuery } from "../store/api";

const BookClassModal = ({ visible, classInfo }) => {
  const date = dayjs(classInfo.date).format("DD-MM-YYYY");

  const { data, error, isLoading, isSuccess } = useClassesQuery();

  console.log(data);
  return (
    <Modal visible={visible} onCancel={() => {}}>
      <List>
        <List.Item>Class: {classInfo.name}</List.Item>
        <List.Item>Date: {date}</List.Item>
        <List.Item>Time: {classInfo.time}</List.Item>
        <List.Item>Booked spots: {classInfo.spots}</List.Item>
      </List>
    </Modal>
  );
};

export default BookClassModal;
