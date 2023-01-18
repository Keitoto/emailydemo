import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialAuthState = { isLoggedIn: false, credits: 0 };
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    updateUser: (state, { payload }) => {
      if (!payload) return;
      state.isLoggedIn = true;
      state.credits = payload.credits;
    },
    addCredits: (state, { payload }) => {
      if (!payload) return;
      state.credits += 5;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get('api/current_user');
  dispatch(authActions.updateUser(data || false));
};

export const handleToken = (token) => async (dispatch) => {
  const { data } = await axios.post('/api/stripe', token);
  dispatch(authActions.addCredits(data || false));
};
