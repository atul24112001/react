import React, { useReducer } from 'react'
import CartContext from './cart-context'

const DefaultState = {
    items: [],
    totalAmount: 0
}

const CartContextReducer = (state, action) => {
    if(action.type === "ADD") {
        const updateItems = [...state.items, action.item];
        console.log(updateItems)
        const updateAmount = state.totalAmount + action.item.price;
        return {
            items: updateItems,
            totalAmount: updateAmount
        }
    }
    return DefaultState;
}

export default function CartProvider() {
    const [initialState, dispatchAction] = useReducer(CartContextReducer, DefaultState)

    const addItemHandler = item => {
        dispatchAction({type:"ADD", item: item})
    };

    const removeItemHandler = (id) => {};

    const cartContextValue = {
        items: initialState.items,
        totalAmount: initialState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext value={cartContextValue}>
            {props.children}
        </CartContext>
    )
}
