import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSurveys } from '../../store/surveysSlice';

const SurveyList = () => {
  const dispatch = useDispatch();
  const didLogRef = useRef(false);
  useEffect(() => {
    if (didLogRef.current === false) {
      didLogRef.current = true;
      dispatch(fetchSurveys());
    }
  }, [dispatch]);

  const { surveys } = useSelector((state) => state.surveys);

  const renderSurveys = () =>
    surveys
      .concat()
      .reverse()
      .map((survey) => (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      ));

  return <div>{renderSurveys()}</div>;
};

export default SurveyList;
