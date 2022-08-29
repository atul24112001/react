import { createSlice} from "@reduxjs/toolkit";

const UI = createSlice({
    name: "ui",
    initialState: { notification: null },
    reducers: {
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const UIAction = UI.actions;

export default UI;