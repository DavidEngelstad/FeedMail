import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyReview = ({ onCancel, formValues }) => {

  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  })
  return (
    <div>
      <h5>Please Confirm You Entries</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>Go Back</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps)(SurveyReview);