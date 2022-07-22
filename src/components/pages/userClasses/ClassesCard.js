import { useSelector } from "react-redux";
import CardContainer from "../../layout/CardContainer";
import TeachersClasses from "./TeachersClasses";
import UsersClasses from "./UsersClasses";
import Warning from "../../error/Warning";

const ClassesCard = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Warning />;
  }

  return (
    <CardContainer>
      {user.isTeacher ? <TeachersClasses /> : <UsersClasses />}
    </CardContainer>
  );
};

export default ClassesCard;
