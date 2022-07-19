import { Result } from "antd";

const ErrorCard = () => {
  return (
    <Result
      status="error"
      title="Ops!"
      subTitle="Sorry, something went wrong."
    />
  );
};

export default ErrorCard;
