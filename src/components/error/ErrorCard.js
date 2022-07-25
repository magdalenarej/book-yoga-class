import { Result } from "antd";

const ErrorCard = () => {
  return (
    <Result
      status="error"
      title="Ops!"
      subTitle="Sorry, something went wrong. Refresh the page or try later"
    />
  );
};

export default ErrorCard;
