import dayjs from "dayjs";
import { List, Calendar } from "antd";
import BookClassModal from "./BookClassModal";
import { useState } from "react";

const events = [
  {
    name: "yoga for beginners",
    spots: 10,
    students: [],
    date: new Date(2022, 5, 17),
    time: "17:00",
  },
  {
    name: "yoga for advanced",
    spots: 10,
    students: [],
    date: new Date(2022, 5, 18),
    time: "17:00",
  },
  {
    name: "yoga for back pain",
    spots: 10,
    students: [],
    date: new Date(2022, 5, 18),
    time: "18:00",
  },
  {
    name: "yoga vinyasa",
    spots: 10,
    students: [],
    date: new Date(2022, 5, 18),
    time: "18:00",
  },
];

const getListData = (value) => {
  const date = dayjs(value).format("MM/DD/YYYY");
  const listData = events.filter((item) => {
    return date === dayjs(item.date).format("MM/DD/YYYY");
  });
  return listData;
};

const BookClassCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");
  const dateCellRender = (value) => {
    const listData = getListData(value);

    return (
      <List className="events">
        {listData.map((item) => (
          <List.Item.Meta
            key={item.name}
            title={item.name}
            description={item.time}
            onClick={(e) => {
              setShowModal(true);
              setValue(item);
            }}
          />
        ))}
      </List>
    );
  };

  return (
    <>
      <Calendar dateCellRender={dateCellRender} />
      <BookClassModal visible={showModal} classInfo={value} />
    </>
  );
};

export default BookClassCalendar;
