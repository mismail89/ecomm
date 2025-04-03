import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

const userSLice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailuer: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
});
 
export const {signInStart, signInSuccess, signInFailuer } = userSLice.actions;
export default userSLice.reducer