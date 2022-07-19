import { List, Modal } from "antd";
import dayjs from "dayjs";
import { useClassesQuery } from "../../../store/api";
import ErrorCard from "../../error/ErrorCard";
import ClassItem from "./YogaClass";

const BookClassModal = ({ visible, classData, isVisibleHanlder }) => {
  const { data, error } = useClassesQuery();

  const list = data.filter((el) => {
    return el.date === dayjs(classData).format("DD-MM-YYYY");
  });

  if (error) {
    return <ErrorCard />;
  }

  return (
    <Modal
      footer={null}
      visible={visible}
      onCancel={() => {
        isVisibleHanlder();
      }}
    >
      <List itemLayout={"vertical"}>
        {list.map((el) => (
          <ClassItem key={el.id} yogaClass={el} />
        ))}
      </List>
    </Modal>
  );
};

export default BookClassModal;
