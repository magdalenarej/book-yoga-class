import dayjs from "dayjs";
import { List, Calendar } from "antd";
import BookClassModal from "./BookClassModal";
import { useState } from "react";
import { useClassesQuery } from "../../../store/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Warning from "../../error/Warning";
import ErrorCard from "../../error/ErrorCard";

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

  if(!user) {
    return <Warning />
  }

  return (
    <>
      {isSuccess ? (
        <Calendar
          dateCellRender={dateCellRender}
          onSelect={(value) => setValue(value)}
        />
      ) : (
       <ErrorCard />
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
