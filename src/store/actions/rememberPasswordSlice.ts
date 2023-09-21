import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface rememberPasswordState {
    rememberMe: boolean;
}

const initialState: rememberPasswordState = {
    rememberMe: false,
}

const rememberPasswordSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setRememberMe(state, action: PayloadAction<boolean>) {
            state.rememberMe = action.payload;
        }
    },
});

export const { setRememberMe } = rememberPasswordSlice.actions;
export default rememberPasswordSlice.reducer;