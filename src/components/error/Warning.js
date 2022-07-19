import { Alert, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Warning = () => {
  const navigate = useNavigate();

  return (
    <Alert
      style={{ maxWidth: 500, margin: "0 auto", marginTop: 32 }}
      message="You must be logged in!"
      showIcon
      description="Please login or create new account!"
      type="error"
      action={
        <Button size="small" danger onClick={() => navigate("/")}>
          Login or register
        </Button>
      }
    />
  );
};

export default Warning
