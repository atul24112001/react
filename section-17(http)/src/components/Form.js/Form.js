import React, { useContext } from 'react';
import useHttp from '../../Hooks/use-http';
import useInput from '../../Hooks/use-input';
import CartContext from '../../store/cart-context';
import Card from '../UI/Card';
import Input from '../UI/Input';
import "./Form.css";
import Select from './Select';

export default function Form(props) {
    // const [error, setError] = useState(false);
    const context = useContext(CartContext);
    const { isLoading, error, sendRequest: sendFormData } = useHttp();

    const {
        value: nameValue,
        valueIsValid: nameIsValid,
        hasError: nameInputInvalid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHangler: nameBlurHandler,
        resetInput: nameReset,
        valueClasses: nameClasse
    } = useInput(enteredName => enteredName.trim().length !== 0);

    const {
        value: numberValue,
        valueIsValid: numberIsValid,
        hasError: numberInputInvalid,
        valueChangeHandler: numberChangeHandler,
        inputBlurHangler: numberBlurHandler,
        resetInput: numberReset,
        valueClasses: numberClasse
    } = useInput(num => num.trim().length > 9);

    const {
        value: emailValue,
        valueIsValid: emailIsValid,
        hasError: emailInputInvalid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHangler: emailBlurHandler,
        resetInput: emailReset,
        valueClasses: emailClasse
    } = useInput(email => email.includes("@"));

    const {
        value: addressValue,
        valueIsValid: addressIsValid,
        hasError: addressInputInvalid,
        valueChangeHandler: addressChangeHandler,
        inputBlurHangler: addressBlurHandler,
        resetInput: addressReset,
        valueClasses: addressClasse
    } = useInput(add => add.trim().length > 10);

    let formIsValid = false;
    if (nameIsValid && numberIsValid && emailIsValid && addressIsValid) {
        formIsValid = true;
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return
        }
        const transformData = data => {
            context.clearCart();
            console.log(data);
        }

        sendFormData({
            url: "https://react-fooddelivery-332e9-default-rtdb.firebaseio.com/delivery.json",
            method: "POST",
            body: {
                id: Math.random(),
                personName: nameValue,
                mobileNumber: numberValue,
                emailAddress: emailValue,
                deliveryAddress: addressValue,
                orderedItems: context.items,
                totalAmount: context.totalAmount
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }, transformData)

        nameReset();
        numberReset();
        emailReset();
        addressReset();
    }
    const NumbrError = numberInputInvalid && <p className='error-text'>Number Is Invalid</p>;
    const emailError = emailInputInvalid && <p className='error-text'>Email Is Invalid</p>;
    const addressError = addressInputInvalid && <p className='error-text'>Provide Detailed Address</p>

    return (
        <form onSubmit={submitHandler} className="form">
            <Card>
                <div className='card'>
                    {/* {error} */}
                    {isLoading && <h3 style={{ textAlign: "center" }}>Loading...</h3>}
                    <div className='control-box'>
                        <div className={nameClasse}>
                            <label htmlFor='name'>Your Name</label>
                            <input
                                type='text'
                                id='name'
                                value={nameValue}
                                onChange={nameChangeHandler}
                                onBlur={nameBlurHandler}
                            />
                            {nameInputInvalid && <p className='error-text'>Name Is Invalid</p>}
                        </div>
                        <Input error={NumbrError} label="Your Nubmer" className={numberClasse} input={{
                            id: "number",
                            type: "number",
                            value: numberValue,
                            onChange: numberChangeHandler,
                            onBlur: numberBlurHandler
                        }} />
                    </div>
                    <div className='control-box'>
                        <Input error={emailError} label="Your Email" className={emailClasse} input={{
                            id: "email",
                            type: "email",
                            value: emailValue,
                            onChange: emailChangeHandler,
                            onBlur: emailBlurHandler
                        }} />
                        <Input error={addressError} label="Delivery Address" className={addressClasse} input={{
                            id: "address",
                            type: "text",
                            value: addressValue,
                            onChange: addressChangeHandler,
                            onBlur: addressBlurHandler
                        }} />
                    </div>
                    <Select />

                    <div className="form-action">
                        <button disabled={!formIsValid}>Place Order</button>
                        <button style={{marginTop: "1vh"}} onClick={props.form} >Go Back</button>
                    </div>
                </div>
            </Card>
        </form>
    )
}
