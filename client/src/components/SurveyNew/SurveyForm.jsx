import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const validate = (values) => {
  const errors = {};
  // valid Emails
  errors.recipients = validateEmails(values.recipients || '');
  // Required - not empty
  for (let key of Object.keys(values)) {
    if (!values[key]) {
      errors[key] = 'You must provide a value';
    }
  }
  return errors;
};

const SurveyForm = ({ onConfirm, formValue, fields }) => {
  return (
    <div>
      <Form
        onSubmit={onConfirm}
        initialValues={formValue}
        validate={validate}
        destroyOnUnmount
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {fields.map(({ label, name }) => (
              <Field
                key={name}
                type="text"
                label={label}
                name={name}
                render={({ label, input, meta }) => (
                  <SurveyField label={label} input={input} meta={meta} />
                )}
              />
            ))}
            <Link to="/surveys" className="red btn-flat white-text">
              Cancel
            </Link>
            <button className="teal btn-flat right white-text" type="submit">
              Next
              <i className="material-icons right">done</i>
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default SurveyForm;
