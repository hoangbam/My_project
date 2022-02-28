import React from "react";
import PlaceList from "../component/PlaceList";
import { useParams } from "react-router-dom";
const PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "The Most Famous Place In The World",
    imageUrl: "https://i.pravatar.cc/300",
    address: "150 Nguyen Van Cu(Call API)",
    location: {
      lat: 40.748492,
      lng: -73.985699,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "The Most Famous Place In The World",
    imageUrl: "https://i.pravatar.cc/400",
    address: "150 Nguyen Van Cu(Call API)",
    location: {
      lat: 40.748492,
      lng: -73.985699,
    },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  //khi ng dùng click vào sẽ có 1 userId và mình sẽ lấy nó từ bên App, muốn lấy từ bên app thì bên app phải có khai báo UserPlaces
  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
