import React, { PropTypes } from 'react';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { validate as isValidEmail } from 'email-validator';

import FieldAdapter from 'components/FieldAdapter';

const fieldValidation = (values) => {
  const errors = {};

  if (values.email && values.email !== '' && !isValidEmail(values.email)) {
    errors.email = 'Please provide a valid e-mail address.';
  }

  if (values.phone && values.phone !== '+' && !isValidPhoneNumber(values.phone)) {
    errors.phone = 'Please provide a valid phone number.';
  }

  return errors;
};

const submitValidation = next => (values) => {
  if (!values.phone && !values.email) {
    throw new SubmissionError({
      _error: 'I would need at least one contact information. Please provide an e-mail or phone number.'
    });
  }

  return next(values);
};

const HireMeForm = reduxForm({
  form: 'hireme',
  validate: fieldValidation
})(({ error, handleSubmit, onSubmit }) => (
  <form
    onSubmit={handleSubmit(submitValidation(onSubmit))}
    action="/api/v1/hire-me"
    method="post"
  >
    <p>Leave me your e-mail</p>
    <Field name="email" component={FieldAdapter} type="email" />
    <p>or a number</p>
    <Field name="phone" component={FieldAdapter} type="phone" />
    <p>with an additional note</p>
    <Field name="note" component={FieldAdapter} type="textarea" />
    {error && <div>{error}</div>}
    <button type="submit">Send the contact</button>
  </form>
));

const HireMe = ({ onSubmit }) => (
  <div>
    <p>Are you interested in training, consulting or some general React and Redux development stuff?
    Just leave me a contact. I will reach to you ASAP, I promise :-)</p>
    <HireMeForm onSubmit={onSubmit} />
  </div>
);

HireMe.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default HireMe;
