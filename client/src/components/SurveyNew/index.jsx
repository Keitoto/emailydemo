import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import axios from 'axios';
import { fetchUser } from '../../store/authSlice';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'recipients' },
];
const INITIAL_VALUE = Object.assign(
  {},
  ...FIELDS.map((item) => ({ [item.name]: '' }))
);

const SurveyNew = () => {
  const [showFormReview, setShowFormReview] = useState(false);
  const [formValue, setFormValue] = useState(INITIAL_VALUE);
  const dispatch = useDispatch();
  const history = useHistory();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleConfirm = async (values) => {
    await sleep(400);
    setFormValue(values);
    setShowFormReview(true);
  };

  const handleSubmit = async () => {
    const res = await axios.post('/api/surveys', formValue);
    // await sleep(1000);
    dispatch(fetchUser(res.data));
    history.replace('/surveys');
  };

  return (
    <div>
      {!showFormReview && (
        <SurveyForm
          onConfirm={handleConfirm}
          formValue={formValue}
          fields={FIELDS}
        />
      )}
      {showFormReview && (
        <SurveyFormReview
          onCancel={() => setShowFormReview(false)}
          formValue={formValue}
          fields={FIELDS}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default SurveyNew;
