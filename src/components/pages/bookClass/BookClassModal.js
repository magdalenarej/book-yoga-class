import dayjs from "dayjs";
import { List, Modal } from "antd";
import { useClassesQuery } from "../../../store/api";
import ErrorCard from "../../error/ErrorCard";
import YogaClass from "./YogaClass";

const BookClassModal = ({ visible, classData, isVisibleHanlder }) => {
  const { data, error } = useClassesQuery();

  const list = data.filter((el) => {
    return el.date === dayjs(classData).format("DD-MM-YYYY");
  });

  if (error) {
    return <ErrorCard />;
  }

  if (!list.length) return null;

  return (
    <Modal
      footer={null}
      visible={visible}
      onCancel={() => isVisibleHanlder()}
    >
      <List
        itemLayout={"vertical"}
        dataSource={list}
        renderItem={(yogaClass) => (
          <YogaClass key={yogaClass.id} yogaClass={yogaClass} />
        )}
      />
    </Modal>
  );
};

export default BookClassModal;
