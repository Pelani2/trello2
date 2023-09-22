import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PasswordResetState {
    loading: boolean;
    error: string | null;
}

const initialState: PasswordResetState = {
    loading: false,
    error:  null,
};

const passwordResetSlice = createSlice({
    name: 'passwordReset',
    initialState,
    reducers: {
        passwordResetStart(state) {
            state.loading = true;
            state.error = null;
        },
        passwordResetSuccess(state) {
            state.loading = false;
        },
        passwordResetFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    passwordResetStart,
    passwordResetSuccess,
    passwordResetFailure
} = passwordResetSlice.actions;

export default passwordResetSlice.reducer;