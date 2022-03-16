import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from '../user/user-reducer';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: userReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunkMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
