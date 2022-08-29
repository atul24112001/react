import React, { useContext } from 'react';
import CartContext from '../../Store/cart-context';


export default function HeaderCart(props) {
    const cartContext = useContext(CartContext);

    const TotalQuantity = cartContext.items.reduce((curItem, item) => {
        return curItem + item.amount
    }, 0)

    return (
        <button onClick={props.onClick} className={props.className}>
            <span>Cart  </span>
            <span>{TotalQuantity}</span>
        </button>
    )
}
