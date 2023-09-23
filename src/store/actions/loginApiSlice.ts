import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginError {
    message: string;
}

interface UserState {
    user: any;
    loading: 'idle' | 'pending';
    error: LoginError | null;
}

const initialState: UserState = {
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
        data: LoginError;
    };
};

export const loginApi = createAsyncThunk<any, FormData, { rejectValue: LoginError }>(
    'users/login',
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

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginApi.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(loginApi.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = 'idle',
            state.user = action.payload;
        });
        builder.addCase(loginApi.rejected, (state, action: PayloadAction<LoginError | null | undefined>) => {
            state.loading = 'idle';
            state.error = action.payload || null;
        });
    }
});

export default userSlice.reducer;