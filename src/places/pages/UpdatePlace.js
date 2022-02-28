import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlaceForm.css";
import Input from "../../shared/component/FormElements/Input";
import Button from "../../shared/component/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/component/UIElements/Card";
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

const UpdatePlace = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  //USEFORM
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const identifiedPlace = PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>COULD NOT FIND PLACES</h2>
        </Card>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Pls enter valid"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Pls enter valid description at least 5 characters"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
