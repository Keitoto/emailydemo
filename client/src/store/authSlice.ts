import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from '.';

interface AuthStateType {
  isLoggedIn: boolean;
  credits: number;
}

const initialAuthState: AuthStateType = { isLoggedIn: false, credits: 0 };
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    updateUser: (state, action: PayloadAction<{ credits: number }>) => {
      const { payload } = action;
      if (!payload) return;
      state.isLoggedIn = true;
      state.credits = payload.credits;
    },
    addCredits: (state, action: PayloadAction<boolean>) => {
      const { payload } = action;
      if (!payload) return;
      state.credits += 5;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;

export const fetchUser =
  (data = null) =>
  async (dispatch: AppDispatch) => {
    if (!data) {
      const res = await axios.get('/api/current_user');
      dispatch(authActions.updateUser(res.data || false));
      return;
    }
    dispatch(authActions.updateUser(data || false));
  };

export const handleToken = (token: string) => async (dispatch: AppDispatch) => {
  const { data } = await axios.post('/api/stripe', token);
  dispatch(authActions.addCredits(data || false));
};
