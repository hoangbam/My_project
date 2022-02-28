import React, { useCallback, useReducer } from "react";
import "./PlaceForm.css";
import Input from "../../shared/component/FormElements/Input";
import Button from "../../shared/component/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hook";
const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  //action cua nguoi dung va dispatch len reducer B2

  const placeSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    //send this to back end
  };

  // const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);
  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text "
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText={"Please enter a valid"}
        onInput={inputHandler}
      />
      <Input
        element="textarea"
        id="description"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText={"Please enter a valid description( at least 5 character)"}
        onInput={inputHandler}
      />
      <Input
        element="textarea"
        id="address"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText={"Please enter a valid address"}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        {" "}
        ADD PLACE{" "}
      </Button>
    </form>
  );
};

export default NewPlace;
