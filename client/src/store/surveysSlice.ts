import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Survey } from '../types';
import { AppDispatch } from '.';

interface SurveyStateType {
  surveys: Survey[];
}

const initialSurveysState: SurveyStateType = { surveys: [] };
const surveysSlice = createSlice({
  name: 'surveys',
  initialState: initialSurveysState,
  reducers: {
    displaySurveys: (state, action: PayloadAction<Survey[]>) => {
      if (!action.payload) return;
      state.surveys = action.payload;
    },
  },
});

export default surveysSlice.reducer;
export const surveysActions = surveysSlice.actions;

export const fetchSurveys = () => async (dispatch: AppDispatch) => {
  const res = await axios.get('/api/surveys');
  dispatch(surveysActions.displaySurveys(res.data || false));
};
