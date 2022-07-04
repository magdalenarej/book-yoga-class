import { Button, List, Modal } from "antd";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useBookClassMutation, useClassesQuery } from "../store/api";

const BookClassModal = ({ visible, classData }) => {
  const { data, error, isLoading, isSuccess } = useClassesQuery();
  const [bookClass] = useBookClassMutation();

  const user = useSelector((state) => state.user);
  const bookClassHanlder = (e, el) => {
    e.preventDefault();
    // const seletedClass = data.filter((el) => el.id === id);
    const students = [...el.students, user];

    console.log(students);
    const { id } = el;

    bookClass({ id, students });
  };

  const renderClassesList = () => {
    const list = data.filter((el) => {
      return el.date === dayjs(classData).format("DD-MM-YYYY");
    });
    return (
      <List
        dataSource={list}
        itemLayout={"vertical"}
        renderItem={(el) => (
          <List.Item>
            <List.Item.Meta key={el.id} title={el.name} />
            <h4>Time: {el.time}</h4>
            <h4>Date: {el.date}</h4>
            <h4>Free spots: {el.spots - el.students.length}</h4>
            <Button
              type="primary"
              onClick={(e) => {
                bookClassHanlder(e, el);
              }}
            >
              Book class!
            </Button>
          </List.Item>
        )}
      ></List>
    );
  };

  if (!isSuccess) {
    return <div>loading</div>;
  }

  return (
    <Modal visible={visible} onCancel={() => {}}>
      {renderClassesList()}
    </Modal>
  );
};

export default BookClassModal;
