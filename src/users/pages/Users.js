import React from "react";
import UsersList from "../component/UsersList";

const Users = () => {
  //tạo dữ liệu giả để thử fetch
  const USERS = [
    {
      id: "u1",
      name: "hieu san",
      image: "https://i.pravatar.cc/300",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
