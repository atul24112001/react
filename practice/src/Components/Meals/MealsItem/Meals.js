import React, { useRef, useContext } from 'react';
import CartContext from '../../../Store/cart-context';
import classes from './Meals.module.css';

export default function Meals(props) {
    const cartContext = useContext(CartContext);
    const inputRef = useRef();

    const additemHandler = item => {
        cartContext.addItem(item)
    }
    
    const formSubmitHandler = event => {
        event.preventDefault();

        const enteredAmount = +(inputRef.current.value);
        const item = {
            id: props.id,
            name: props.name,
            amount: enteredAmount,
            price: props.price
        }
        additemHandler(item);
    }

    return (
        <li className={classes.meal}>
           <div className={classes.detalis}>
              <h1>{props.name}</h1>
              <i>{props.description}</i>
              <h1>${props.price}</h1>
           </div>

           <div className={classes.form}>
               <form onSubmit={formSubmitHandler}>
                  <label htmlFor="quantity">Quantity</label>
                  <input ref={inputRef} type="number" min="1" max="5" defaultValue="1" id="quantity"/>
               <button type='submit'>+ ADD</button>
               </form>
           </div>
        </li>
    )
}
