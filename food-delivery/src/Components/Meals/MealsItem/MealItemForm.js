import React, { useRef, useState } from 'react';
import Input from '../../UI/Input/Input';
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmountStr = amountInputRef.current.value;

        if (enteredAmountStr.trim().length === 0 || enteredAmountStr < 1 || enteredAmountStr > 5) {
            setAmountIsValid(false);
            return;
        } 
           
        setAmountIsValid(true);
        const enteredAmount = +enteredAmountStr;
        props.onAddToCart(enteredAmount);
    }  

    return (
        <form className={classes.form} onSubmit={submitHandler} >
            <Input
                ref={amountInputRef}
                label="Amount" input={{
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                    id: props.id
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please Enter Valid Amount (1-5).</p>}
        </form>
    )
}
