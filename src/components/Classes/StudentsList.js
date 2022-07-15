import { Modal } from "antd";

const StudentsList = ({ students, isVisible, onShowModal }) => {
  return (
    <Modal
      title="Students:"
      visible={isVisible}
      footer={null}
      onCancel={onShowModal}
    >
      {students.map((student) => (
        <h4 key={student.id}>
          {student.name} {student.surname}{" "}
        </h4>
      ))}
    </Modal>
  );
};

export default StudentsList;
