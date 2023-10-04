import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("render one roe per user", () => {
  //Render the component
  const users = [
    { name: "anto", email: "anto@gmail.com" },
    { name: "fati", email: "fati@gmail.com" },
  ];
  render(<UserList users={users} />);

  //Find all the rows in the table

  //Assertation: correct number of rows in the table
});

test("render the email and name of each user", () => {});
