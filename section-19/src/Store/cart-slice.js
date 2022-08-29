import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
    name: "toggleCart",
    initialState: { isCartShown: false, cartItems: [], changed: false },
    reducers: {
        replace(state, action){
            state.cartItems = action.payload.cartData;
        },
        toggleCart(state) {
            state.isCartShown = !state.isCartShown
        },
        addItem(state, action) {
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            const existingItem = state.cartItems[existingItemIndex];
            state.changed = true;
            let updatedItems;
            let updatedItem;
            if (existingItem) {
                updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + 1
                }

                updatedItems = [...state.cartItems];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = state.cartItems.concat(action.payload)
            }
            state.cartItems = updatedItems;


        },
        decreaseItemAmount(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload)
            state.changed = true;
            let updatedItem;
            let updatedItems;
            if (state.cartItems[itemIndex].amount < 2) {
                updatedItems = state.cartItems.filter(item => item.id !== action.payload);
            } else {
                updatedItem = state.cartItems[itemIndex].amount - 1;
                updatedItems = [...state.cartItems];
                updatedItems[itemIndex].amount = updatedItem;
            }
            state.cartItems = updatedItems;
            console.log(state.cartItems)
        }
    }
})


export const CartAction = Cart.actions;

export default Cart.reducer;
