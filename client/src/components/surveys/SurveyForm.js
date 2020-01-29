import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmail from '../../utils/validateEmail';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'recipients' },
]

class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => {
      return (
        <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      )
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link className="red btn-flat left white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">Next<i className="material-icons right">done</i></button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmail(values.recipients || '');


  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value!`
    }

  })

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);