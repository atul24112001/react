import React, { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
import MealItemForm from './MealItemForm';
import classes from "./MealsItem.module.css";

export default function MealsItem(props) {
    const cartContext = useContext(CartContext);
    
    const addCartItemHandler = amount => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>${props.price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addCartItemHandler} id={props.id}/>
            </div>
        </li>
    )
}
