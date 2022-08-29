import { useState } from "react";

const useInputs = (validation) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [IsTouched, setIsTouched] = useState(false);

    const enteredValueIsValid = validation(enteredValue);
    const valueInputInvalid = !enteredValueIsValid && IsTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    }

    const valueBlurHAndler = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setIsTouched(false);
        setEnteredValue("");
    }

    return {
        value: enteredValue,
        isValid: enteredValueIsValid,
        hasError: valueInputInvalid,
        valueChangeHandler,
        valueBlurHAndler,
        reset
    }
}

export default useInputs;