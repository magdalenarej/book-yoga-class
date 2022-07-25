import { Card } from "antd";

const cardStyle = { maxWidth: 600, margin: "0 auto", marginTop: 32 };

const CardContainer = ({ children }) => {
  return <Card style={cardStyle}>{children}</Card>;
};

export default CardContainer;
