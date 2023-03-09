import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import surveysReducer from './surveysSlice';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
    surveys: surveysReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
