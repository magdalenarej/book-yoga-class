import { Card } from "antd";

const CardContainer = ({ children }) => {
  return (
    <Card style={{ maxWidth: 600, margin: "0 auto", marginTop: 32 }}>
      {children}
    </Card>
  );
};

export default CardContainer;
