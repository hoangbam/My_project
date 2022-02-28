import React from "react";
import "./UsersList.css";
import UsersItem from "./UsersItem";
import Card from "../../shared/component/UIElements/Card";
const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card>
          <h2>Not User Found!!</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => {
        //tao props
        return (
          <UsersItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};
export default UsersList;
