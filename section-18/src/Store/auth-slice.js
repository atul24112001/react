import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoged: false
    },
    reducers: {
        login(state){
            state.isLoged = true;
        },
        logout(state){
            state.isLoged = false;
        }
    }
})

export const authAction = authSlice.actions;

export default authSlice.reducer;