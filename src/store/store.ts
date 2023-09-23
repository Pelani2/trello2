import { configureStore } from '@reduxjs/toolkit';
import passwordValidationReducer from './actions/passwordValidationSlice';
import rememberPasswordReducer from './actions/rememberPasswordSlice';
import passwordResetReducer from './actions/passwordResetSlice';
import loginApiReducer from './actions/loginApiSlice';

const store = configureStore({
    reducer: {
        passwordValidation: passwordValidationReducer,
        rememberPassword: rememberPasswordReducer,
        passwordReset: passwordResetReducer,
        loginApi: loginApiReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;