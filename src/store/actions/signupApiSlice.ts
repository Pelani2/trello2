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