import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialSurveysState = { surveys: [] };
const surveysSlice = createSlice({
  name: 'surveys',
  initialState: initialSurveysState,
  reducers: {
    displaySurveys: (state = [], { payload }) => {
      if (!payload) return;
      state.surveys = payload;
    },
  },
});

export default surveysSlice.reducer;
export const surveysActions = surveysSlice.actions;

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get('/api/surveys');
  dispatch(surveysActions.displaySurveys(res.data || false));
};
