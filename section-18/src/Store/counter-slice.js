import { createSlice } from "@reduxjs/toolkit";

const counetrSlice = createSlice({
    name: "counetr",
    initialState: {
        counter: 0,
         showCounter: true
   },
    reducers: {
        addition(state) {
            state.counter++;
        },
        subtraction(state){
            state.counter--;
        },
        increment(state, action){
            state.counter = state.counter + action.payload.amount;
        },
        toogle(state){
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counetrSlice.actions;

export default counetrSlice.reducer;
