import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import CartContext from '../../Store/cart-context';
import classes from './Cart.module.css'
const cartItem = <ul><li>Atul</li></ul>

const Modal = (props) => {
    const cartContext = useContext(CartContext)
const TotalAmount = cartContext.totalAmount
    return (
        <div className={classes.backdrop}>
        <div className={classes.cart}>
            {cartItem}
            <div>
                <h1>TotalAmount: {TotalAmount}</h1>
                <button onClick={props.onClick}>cancel</button>
            </div>
        </div>
    </div>
    )
}

export default function Cart(props) {

    return (
     ReactDOM.createPortal(<Modal onClick={props.onClick}/>, document.getElementById('modal'))
    )
}
