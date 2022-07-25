import { Modal, Typography } from "antd";
const { Text } = Typography;

const StudentsList = ({ students, isVisible, onShowModal }) => {
  return (
    <Modal
      title="Students:"
      visible={isVisible}
      footer={null}
      onCancel={onShowModal}
    >
      {students.map((student) => (
        <Text key={student.id}>
          {student.name} {student.surname}
        </Text>
      ))}
    </Modal>
  );
};

export default StudentsList;
