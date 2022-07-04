import dayjs from "dayjs";
import { List, Calendar } from "antd";
import BookClassModal from "./BookClassModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useClassesQuery } from "../store/api";

// const events = [
//   {
//     name: "yoga for beginners",
//     spots: 10,
//     students: [],
//     date: new Date(2022, 5, 17),
//     time: "17:00",
//   },
//   {
//     name: "yoga for advanced",
//     spots: 10,
//     students: [],
//     date: new Date(2022, 5, 18),
//     time: "17:00",
//   },
//   {
//     name: "yoga for back pain",
//     spots: 10,
//     students: [],
//     date: new Date(2022, 5, 18),
//     time: "18:00",
//   },
//   {
//     name: "yoga vinyasa",
//     spots: 10,
//     students: [],
//     date: new Date(2022, 5, 18),
//     time: "18:00",
//   },
// ];

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
              // setValue(item);
            }}
          />
        ))}
      </List>
    );
  };
  console.log(value);

  return (
    <>
      {isSuccess && (
        <Calendar
          dateCellRender={dateCellRender}
          onSelect={(value) => setValue(value)}
        />
      )}
      {!isLoading && <BookClassModal visible={showModal} classData={value} />}
    </>
  );
};

export default BookClassCalendar;
