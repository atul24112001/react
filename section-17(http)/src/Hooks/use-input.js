import { useReducer } from "react";

const defaultState = {
    enteredValue: "",
    isTouched: false
}

const InputReducer = (state, action) => {
    if (action.type === "CHANGE") {
        return {
            enteredValue: action.value,
            isTouched: state.isTouched
        }
    }
    if (action.type === "BLUR") {
        return {
            isTouched: true,
            enteredValue: state.enteredValue
        }
    }
    if (action.type === "RESET") {
        return {
            enteredValue: "",
            isTouched: false
        }
    }
    return defaultState;
}

const useInput = (validation) => {
    const [state, dispatch] = useReducer(InputReducer, defaultState);

    const valueIsValid = validation(state.enteredValue);
    const hasError = !valueIsValid && state.isTouched;
    
    const valueChangeHandler = event => {
        dispatch({type: "CHANGE", value: event.target.value});
    }

    const inputBlurHangler = event => {
        dispatch({type: "BLUR", value: false})
    }

    const resetInput = () => {
        dispatch({type: "RESET"});
    }

    const valueClasses = hasError ? "form-controls invalid" : "form-controls";

    return {
        value: state.enteredValue,
        valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHangler,
        resetInput,
        valueClasses,
    }
} 

export default useInput;