import { Modal, Typography } from "antd";
const { Paragraph } = Typography;

const StudentsList = ({ students, isVisible, onShowModal }) => {
  return (
    <Modal
      title="Students:"
      visible={isVisible}
      footer={null}
      onCancel={onShowModal}
    >
      {students.map((student) => (
        <Paragraph key={student.id}>
          {student.name} {student.surname}
        </Paragraph>
      ))}
    </Modal>
  );
};

export default StudentsList;
