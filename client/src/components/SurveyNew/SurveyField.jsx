import React from 'react';

const SurveyField = ({ label, input, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {error && touched && <span>{error}</span>}
      </div>
    </div>
  );
};

export default SurveyField;
