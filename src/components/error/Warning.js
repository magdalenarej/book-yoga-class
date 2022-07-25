import { Alert, Button } from "antd";
import { useNavigate } from "react-router-dom";

const alertStyles = { maxWidth: 500, margin: "0 auto", marginTop: 32 };

const Warning = () => {
  const navigate = useNavigate();

  return (
    <Alert
      style={alertStyles}
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

export default Warning;
