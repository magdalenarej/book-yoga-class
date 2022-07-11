import dayjs from "dayjs";
import { List, Calendar, Alert, Button } from "antd";
import BookClassModal from "./BookClassModal";
import { useState } from "react";
import { useClassesQuery } from "../store/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const getListData = (value, events) => {
  const date = dayjs(value).format("DD-MM-YYYY");
  const listData = events.filter((item) => {
    return date === item.date;
  });
  return listData;
};

const BookClassCalendar = () => {
  const { data, error, isLoading, isSuccess } = useClassesQuery();

  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const dateCellRender = (value) => {
    const listData = getListData(value, data);

    return (
      <List>
        {listData.map((item) => (
          <List.Item.Meta
            key={item.id}
            title={item.name}
            description={item.time}
            onClick={(e) => {
              setShowModal(true);
            }}
          />
        ))}
      </List>
    );
  };

  return (
    <>
      {isSuccess && user ? (
        <Calendar
          dateCellRender={dateCellRender}
          onSelect={(value) => setValue(value)}
        />
      ) : (
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
      )}
      {!isLoading && (
        <BookClassModal
          visible={showModal}
          classData={value}
          isVisibleHanlder={setShowModal}
        />
      )}
    </>
  );
};

export default BookClassCalendar;
