import { createSlice } from '@reduxjs/toolkit';

const initialSurveysState = {};
const surveysSlice = createSlice({
  name: 'surveys',
  initialState: initialSurveysState,
  reducers: {},
});

export default surveysSlice.reducer;
export const surveysActions = surveysSlice.actions;
