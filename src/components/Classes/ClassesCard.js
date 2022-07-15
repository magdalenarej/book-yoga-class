import { useSelector } from "react-redux";
import CardContainer from "../CardContainer";
import TeachersClasses from "./TeachersClasses";
import UsersClasses from "./UsersClasses";

const ClassesCard = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <CardContainer>
      {user.isTeacher ? <TeachersClasses /> : <UsersClasses />}
    </CardContainer>
  );
};

export default ClassesCard;
