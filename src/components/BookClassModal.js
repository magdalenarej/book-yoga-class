import { List, Modal } from "antd";
import dayjs from "dayjs";
import { useClassesQuery } from "../store/api";
import ClassItem from "./ClassItem";

const BookClassModal = ({ visible, classData }) => {
  const { data, error, isLoading, isSuccess } = useClassesQuery();

  const list = data.filter((el) => {
    return el.date === dayjs(classData).format("DD-MM-YYYY");
  });

  if (!isSuccess) {
    return <div>loading</div>;
  }

  return (
    <Modal visible={visible} onCancel={() => {}}>
      <List itemLayout={"vertical"}>
        {list.map((el) => (
          <ClassItem yogaClass={el} />
        ))}
      </List>
    </Modal>
  );
};

export default BookClassModal;
