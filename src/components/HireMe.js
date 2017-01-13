import React, { PropTypes } from 'react';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { validate as isValidEmail } from 'email-validator';

import FieldAdapter from 'components/FieldAdapter';

import 'components/HireMe.less';

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
    <p>Fill in your <b>e-mail</b></p>
    <Field name="email" component={FieldAdapter} type="email" placeholder="example@example.com" />
    <p>or a <b>phone number</b></p>
    <Field name="phone" component={FieldAdapter} type="phone" />
    <p>with an <b>additional note</b></p>
    <Field name="note" component={FieldAdapter} type="textarea" />
    {error && <p className="validation-error">{error}</p>}
    <button type="submit">Send the contact</button>
  </form>
));

const HireMe = ({ onSubmit }) => (
  <section id="hire-me">
    <div className="content">
      <h2>Hire Me</h2>

      <p>Are you interested in training, consulting or some general React and Redux development stuff?
      Just fill in the contact form. I will reach you ASAP, I promise :-)</p>
      <HireMeForm onSubmit={onSubmit} />
    </div>
  </section>
);

HireMe.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default HireMe;
