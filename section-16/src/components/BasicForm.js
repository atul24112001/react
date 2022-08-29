import useInputs from "../Hooks/use-inputs";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputInvalid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHAndler: nameBlurHandler,
    reset: nameInputReset
  } = useInputs(value => value.trim() !== ""); 

  const {
    value: enteredLast,
    isValid: enteredLastIsValid,
    hasError: lastInputInvalid,
    valueChangeHandler: lastChangeHandler,
    valueBlurHAndler: lastBlurHandler,
    reset: lastInputReset
  } = useInputs(value => value.trim() !== ""); 

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHAndler: emailBlurHandler,
    reset: emailInputReset
  } = useInputs(value => value.includes("@")); 

  let formIsValid = false;
  if(enteredNameIsValid && enteredLastIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if(!formIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredLast);
    console.log(enteredEmail);

    nameInputReset();
    lastInputReset();
    emailInputReset();
  }

  const nameClasses = nameInputInvalid ? 'form-control invalid' : 'form-control';
  const lastClasses = lastInputInvalid ? 'form-control invalid' : 'form-control';
  const emailClasses = emailInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
           type='text'
           id='name'
           onChange={nameChangeHandler}
           value={enteredName}
           onBlur={nameBlurHandler}
           />
          {nameInputInvalid && <p className="error-text">Invalid FirstName.</p>}
        </div>
        <div className={lastClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
           type='text'
           id='name'
           onChange={lastChangeHandler}
           value={enteredLast}
           onBlur={lastBlurHandler}
           />
          {lastInputInvalid && <p className="error-text">Invalid LastName.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
         type='text'
         id='name'
         onChange={emailChangeHandler}
         onBlur={emailBlurHandler}
         value={enteredEmail}
         />
          {emailInputInvalid && <p className="error-text">Invalid E-Mail Address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
