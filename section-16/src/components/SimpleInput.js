import React from "react";
import useInput from "../Hooks/use-input";
import Input from "./UI/Input/Input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputInvalid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHAndler: nameBlurHAndler,
    reset: nameReset
  } = useInput(entered => entered.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHAndler: emailBlurHandler,
    reset: emailReset
  } = useInput(entered => entered.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  const submitHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);
    nameReset();
    emailReset();
  }

  const nameInputClass = nameInputInvalid ? "form-control  invalid" : "form-control"
  const emailInputClass = emailInputInvalid ? "form-control  invalid" : "form-control"


  return (
    <form onSubmit={submitHandler}>
      <Input
        type="text"
        className={nameInputClass}
        onChange={nameChangeHandler}
        value={enteredName}
        onBlur={nameBlurHAndler}
        label="Your Name"
      >
        {nameInputInvalid && <p className="error-text">Invalid Name.</p>}
      </Input>

      <Input
         type='email'
         className={emailInputClass}
         onChange={emailChangeHandler}
         value={enteredEmail}
         onBlur={emailBlurHandler}
         label="Your E-Mail"
      >
      {emailInputInvalid && <p className="error-text">Invalid Eamil.</p>}
      </Input>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
