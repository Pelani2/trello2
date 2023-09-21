import { configureStore } from '@reduxjs/toolkit';
import passwordValidationReducer from './actions/passwordValidationSlice';
import rememberPasswordReducer from './actions/rememberPasswordSlice';

const store = configureStore({
    reducer: {
        passwordValidation: passwordValidationReducer,
        rememberPassword: rememberPasswordReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;