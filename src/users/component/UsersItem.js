import React from "react";
import Avatar from "../../shared/component/UIElements/Avatar";
import "./UsersItem.css";
import Card from "../../shared/component/UIElements/Card";
import { Link } from "react-router-dom";
const UsersItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Card>
          <Link to="/u1/places">
            <div className="user-item__image">
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className="user-item__info">
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </div>
    </li>
  );
};

export default UsersItem;
