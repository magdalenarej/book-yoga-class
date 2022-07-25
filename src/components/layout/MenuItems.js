import {
  PlusCircleOutlined,
  CalendarOutlined,
  ContactsOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export const createMenuItemsTeacher = (navigate, onLogutHandler) => {
  return [
    {
      key: 1,
      label: "Calendar",
      onClick: () => {
        navigate("/book-class");
      },
      icon: <CalendarOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
    {
      key: 2,
      label: "Add class",
      onClick: () => {
        navigate("/add-class");
      },
      icon: <PlusCircleOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
    {
      key: 3,
      label: "My classes",
      onClick: () => {
        navigate("/my-classes");
      },
      icon: <ContactsOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
    {
      key: 4,
      label: "Logout",
      onClick: () => {
        onLogutHandler();
      },
      icon: <LogoutOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
  ];
};

export const createMenuItemsStudent = (navigate, onLogutHandler) => {
  return [
    {
      key: 1,
      label: "Calendar",
      onClick: () => {
        navigate("/book-class");
      },
      icon: <CalendarOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
    {
      key: 2,
      label: "My classes",
      onClick: () => {
        navigate("/my-classes");
      },
      icon: <ContactsOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
    {
      key: 3,
      label: "Logout",
      onClick: () => {
        onLogutHandler();
      },
      icon: <LogoutOutlined style={{ fontSize: 24 }} />,
      style: { fontSize: 18 },
    },
  ];
};
