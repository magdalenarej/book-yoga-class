# Book yoga class app 📅🧘‍♀️

An app for booking and adding yoga class created with ReactJS, Redux-toolkit and Ant-design.

## Installation

Install book-yoga-class with npm

```bash
  npm install book-yoga-class
  cd book-yoga-class
```

Install json-server

```bash
  npm install -g json-server
```

Run the server

```bash
  json-server db.json -m ./node_modules/json-server-auth --port 4000
```

Run the app in another terminal

```bash
  npm run start
```

## Tech Stack

**Client:**

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Ant Design](https://ant.design/)

**Server:**

- [json-server](https://github.com/typicode/json-server)
- [json-server-auth](https://github.com/jeremyben/json-server-auth)

## Features

- Login and registration
- User - student mode:
  - booking yoga class
  - cancelling booked class
  - displays all booked classes
- User - teacher mode:
  - adding new class
  - cancelling class
  - displays classes and list of students

## Screenshots
Login

![Login view](img/Login-page.png)

Registration

![Refistration view](img/Registration-page.png)

User login

![After login](img/Login-to-calendar.gif)

Calendar with classes

![Calendar view](img/Calendar.png)

Book and cancell booking 
![Booking and canclling class by student](img/Book-class-and-cancell.gif)

Student's classes

![Booked classes by student view](img/Student-classes.png)

User can't book class if there is no free spot

![Student can't book class if there is no free spot](img/Booked-class.png)

Add new class by teacher

![Add new class view](img/Add-new-class.png)

Classes with students list

![Teacher classes with list of students](img/List-of-students.gif)
