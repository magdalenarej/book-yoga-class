import { List, Button } from "antd";
import { useBookClassMutation, useClassesQuery } from "../store/api";
import { useSelector } from "react-redux";

const ClassItem = ({ yogaClass }) => {
  const { data, error, isLoading, isSuccess } = useClassesQuery();
  const [
    bookClass,
    { isLoading: isLoadingBook, isSuccess: isSuccessBook },
  ] = useBookClassMutation();

  const user = useSelector((state) => state.user);

  const bookClassHanlder = (e, yogaClass) => {
    e.preventDefault();
    const students = [...yogaClass.students, user];
    const { id } = yogaClass;
    bookClass({ id, students });
  };

  if (!isSuccess) {
    return <div>loading</div>;
  }
  return (
    <List.Item>
      <List.Item.Meta key={yogaClass.id} title={yogaClass.name} />
      <h4>Time: {yogaClass.time}</h4>
      <h4>Date: {yogaClass.date}</h4>
      <h4>Free spots: {yogaClass.spots - yogaClass.students.length}</h4>
      <Button
        type="primary"
        onClick={(e) => {
          bookClassHanlder(e, yogaClass);
        }}
      >
        Book class!
      </Button>
    </List.Item>
  );
};

export default ClassItem;
