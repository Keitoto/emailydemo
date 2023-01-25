import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const handleSubmit = async (values) => {
  await sleep(400);
  console.log(values);
};

const required = (value) => (value ? undefined : 'This field is required.');
const validEmails = (emails) => {
  const result = validateEmails(emails);
  return !result ? undefined : result;
};

const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

const SurveyForm = () => {
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        initialValues={{ title: '', subject: '', body: '', emails: '' }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              label="Survey Title"
              name="title"
              type="text"
              validate={required}
              render={({ label, input, meta }) => (
                <SurveyField label={label} input={input} meta={meta} />
              )}
            />
            <Field
              label="Subject Line"
              name="subject"
              type="text"
              validate={required}
              render={({ label, input, meta }) => (
                <SurveyField label={label} input={input} meta={meta} />
              )}
            />
            <Field
              label="Email Body"
              name="body"
              type="text"
              validate={required}
              render={({ label, input, meta }) => (
                <SurveyField label={label} input={input} meta={meta} />
              )}
            />
            <Field
              label="Recipient List"
              name="emails"
              type="text"
              validate={composeValidators(required, validEmails)}
              render={({ label, input, meta }) => (
                <SurveyField label={label} input={input} meta={meta} />
              )}
            />
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
