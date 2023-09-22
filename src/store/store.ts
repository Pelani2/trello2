import { configureStore } from '@reduxjs/toolkit';
import passwordValidationReducer from './actions/passwordValidationSlice';
import rememberPasswordReducer from './actions/rememberPasswordSlice';
import passwordResetReducer from './actions/passwordResetSlice';

const store = configureStore({
    reducer: {
        passwordValidation: passwordValidationReducer,
        rememberPassword: rememberPasswordReducer,
        passwordReset: passwordResetReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;