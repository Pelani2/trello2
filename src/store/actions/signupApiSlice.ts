import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { type } from 'os';

interface SignupError {
    message: string;
}

interface SignupState {
    user: any;
    loading: 'idle' | 'pending';
    error: SignupError | null;
}

const initialState: SignupState = {
    user: null,
    loading: 'idle',
    error: null
};

type FormData = {
    email: string;
    password: string;
}

type ApiError = {
    response: {
        data: SignupError;
    };
};

export const signupApi = createAsyncThunk<any, FormData, {
rejectValue: SignupError }>(
    'users/signup',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post('', {
                email: data.email,
                password: data.password
            });
            return response.data;
        } catch (error: unknown) {
            const err = error as ApiError;
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);