import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ViewportState {
    width: number;
}

const initialState: ViewportState = {
    width: window.innerWidth,
};

export const viewportSlice = createSlice({
    name: 'viewport',
    initialState,
    reducers: {
        setViewportWidth: (state, action: PayloadAction<number>) => {
            state.width = action.payload;
        },
    },
});

export const { setViewportWidth } = viewportSlice.actions;

export default viewportSlice.reducer;
