import { configureStore } from "@reduxjs/toolkit";

import Cart from "./cart-slice"
import UI from "./ui-slice";


const store = configureStore({
    reducer: { cart: Cart, ui: UI.reducer}
})

export default store;