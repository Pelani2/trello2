import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PasswordValidationState {
    isLengthValid: boolean;
    hasSpecialCharacter: boolean;
}

const initialState: PasswordValidationState = {
    isLengthValid: false,
    hasSpecialCharacter: false,
};

const passwordValidationSlice = createSlice({
    name: 'passwordValidation',
    initialState,
    reducers: {
        setIsLengthValid(state, action: PayloadAction<boolean>) {
            state.isLengthValid = action.payload;
        },
        setHasSpecialCharacter(state, action: PayloadAction<boolean>) {
            state.hasSpecialCharacter = action.payload;
        },
    },
});

export const { setIsLengthValid, setHasSpecialCharacter } = passwordValidationSlice.actions;
export default passwordValidationSlice.reducer;