import { List, Modal } from "antd";
import dayjs from "dayjs";
import { useClassesQuery } from "../store/api";
import ClassItem from "./ClassItem";

const BookClassModal = ({ visible, classData, isVisibleHanlder }) => {
  const { data, error, isLoading, isSuccess } = useClassesQuery();

  const list = data.filter((el) => {
    return el.date === dayjs(classData).format("DD-MM-YYYY");
  });

  if (!isSuccess) {
    return <div>loading</div>;
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
