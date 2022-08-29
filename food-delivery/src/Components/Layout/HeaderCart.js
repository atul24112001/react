import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../Store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from "./HeaderCart.module.css";

export default function HeaderCart(props) {
    const cartContext = useContext(CartContext);
    const [animation, setAnimation] = useState(false)

    const {items} = cartContext;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)
    
    
    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setAnimation(true);
        const timer = setTimeout(() => {
            setAnimation(false)
        }, 300)
        
        return () => {
            clearTimeout(timer)
        }
    }, [items])
    
    const btnClasses = `${classes.button}  ${animation ? classes.bump : ''}`

    return (
        <button onClick={props.onClick} className={btnClasses}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
