import { configureStore } from '@reduxjs/toolkit';
import passwordValidationReducer from './actions/passwordValidationSlice';

const store = configureStore({
    reducer: {
        passwordValidation: passwordValidationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;