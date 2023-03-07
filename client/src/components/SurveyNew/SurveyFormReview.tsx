import { FC } from 'react';
import { FieldType, TField } from '.';

interface Props {
  onCancel: () => void;
  formValue: FieldType;
  fields: TField[];
  onSubmit: () => Promise<void>;
}

const SurveyFormReview: FC<Props> = ({
  onCancel,
  formValue,
  fields,
  onSubmit,
}) => {
  const reviewFields = fields.map(({ label, name }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValue[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
      <button className="green btn-flat right white-text" onClick={onSubmit}>
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

export default SurveyFormReview;
