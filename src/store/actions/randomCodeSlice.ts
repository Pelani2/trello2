import { createSlice } from "@reduxjs/toolkit";

interface RandomCodeState {
    code: string;
}

const initialState:  RandomCodeState = {
    code: "",
};

const randomCodeSlice = createSlice({
    name: 'randomCode',
    initialState,
    reducers: {
        generateRandomCode: (state) => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const codeLength = 10;
            let randomCode = '';
            for (let i = 0; i < codeLength; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                randomCode += characters.charAt(randomIndex);
            }
            state.code = randomCode;
        }
    }
});

export const { generateRandomCode } = randomCodeSlice.actions;
export default randomCodeSlice.reducer;