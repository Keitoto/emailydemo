import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import surveysReducer from './surveysSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    surveys: surveysReducer,
  },
});

export default store;
