import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { AppDispatch } from '../app/store';

export type UserState = {
    isAuthenticated: boolean;
    isSigningIn: boolean;
};

const initialState: UserState = {
    isAuthenticated: false,
    isSigningIn: false,
};

const signInStart = (state: WritableDraft<UserState>) => {
    state.isSigningIn = true;
};

const signInSuccess = (state: WritableDraft<UserState>) => {
    state.isSigningIn = false;
    state.isAuthenticated = true;
};

const signOut = (state: WritableDraft<UserState>) => {
    state.isAuthenticated = false;
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart,
        signInSuccess,
        signOut,
    },
});

const { actions, reducer } = slice;

export { actions };

export default reducer;

// Old way!
export const signIn = () => async (dispatch: AppDispatch) => {
    dispatch(actions.signInStart());

    await new Promise((resolve) => setTimeout(resolve, 900));

    dispatch(actions.signInSuccess());

    return 'Signed in successfully!';
};

// Redux Toolkit way!
export const signInRTK = createAsyncThunk<string, number>(
    'users/fetchById',
    async (userId: number, thunkApi) => {
        thunkApi.dispatch(actions.signInStart());

        await new Promise((resolve) => setTimeout(resolve, 900));

        thunkApi.dispatch(actions.signInSuccess());

        return 'dddd';
    }
);
