import { useState, useCallback } from "react";

const useInput = (validate) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [IsTouched, setIsTouched] = useState(false);

    const valueIsValid = validate(enteredValue);
    const hasError = !valueIsValid && IsTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    }

    const valueBlurHAndler = event => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }


    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHAndler,
        reset
    }

}

export default useInput;
