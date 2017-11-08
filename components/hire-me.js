import React from "react";
import { connect } from "react-redux";
import { isValidPhoneNumber } from "react-phone-number-input";
import { reduxForm, SubmissionError } from "redux-form";
import { validate as isValidEmail } from "email-validator";

import Content from "components/visuals/content";
import Field from "components/forms/field";
import Heading2 from "components/visuals/heading-2";
import Paragraph from "components/visuals/paragraph";
import Section from "components/visuals/section";
import { FORM_SUBMITTED } from "src/reducer";

const fieldValidation = values => {
  const errors = {};

  if (values.email && values.email !== "" && !isValidEmail(values.email)) {
    errors.email = "Please provide a valid e-mail address.";
  }

  if (
    values.phone &&
    values.phone !== "+" &&
    !isValidPhoneNumber(values.phone)
  ) {
    errors.phone = "Please provide a valid phone number.";
  }

  return errors;
};

const submitValidation = next => values => {
  if (!values.phone && !values.email) {
    throw new SubmissionError({
      _error:
        "I would need at least one contact information. Please provide an e-mail or phone number."
    });
  }

  return next(values);
};

const HireMeForm = reduxForm({
  form: "hireme",
  validate: fieldValidation
})(({ error, handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(submitValidation(onSubmit))}>
    <p>
      Fill in your <b>e-mail</b>
    </p>
    <Field name="email" type="email" placeholder="example@example.com" />
    <p>
      or a <b>phone number</b>
    </p>
    <Field name="phone" type="phone" placeholder="44 123 123 1234" />
    <p>
      with an <b>additional note</b>
    </p>
    <Field name="note" type="textarea" />
    {error && <p className="validation-error">{error}</p>}
    <button type="submit">Send the contact</button>
    <style jsx>{`
      p {
        font-size: 16px;
        margin: 20px 0 10px 0;
        font-weight: 600;
        line-height: 1.1;
        font-family: "Source Sans Pro", sans-serif;
      }
      p.validation-error {
        color: #e74c3c;
        font-weight: normal;
      }
      button[type="submit"] {
        background: #2c2c2c;
        padding: 10px 36px;
        border: none;
        border-radius: 4px;
        line-height: 1.4;
        vertical-align: middle;
        text-align: center;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        outline: none;
      }
      button[type="submit"]:hover {
        background: rgba(255, 255, 255, 0.44);
        color: #333;
        border: 1px solid #333;
      }
    `}</style>
  </form>
));

const submitForm = formSubmitted => async data => {
  try {
    formSubmitted();

    await fetch("https://formspree.io/me@tomasweiss.com", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (ex) {
    console.error(ex);
  }
};

const HireMe = ({ submitted, formSubmitted }) => (
  <Section id="consulting-and-training" style={{ backgroundColor: "#f1f1f1" }}>
    <Content>
      <Heading2>Hire Me</Heading2>
      <Paragraph>
        Are you interested in training, consulting or some general React and
        Redux development stuff? Just fill in the contact form. I will reach you
        ASAP, I promise :-)
      </Paragraph>
      <div className="form-wrapper">
        {!submitted && <HireMeForm onSubmit={submitForm(formSubmitted)} />}
        {submitted && (
          <Paragraph>
            <div className="thanks">Thank you!</div>
          </Paragraph>
        )}
      </div>
    </Content>
    <style jsx>{`
      .form-wrapper {
        min-height: 500px;
      }
      .thanks {
        text-align: center;
        margin-top: 50px;
        font-size: 20px;
        font-weight: bold;
      }
    `}</style>
  </Section>
);

const mapStateToProps = ({ submitted }) => ({ submitted });
const mapDispatchToProps = {
  formSubmitted: () => ({ type: FORM_SUBMITTED })
};

export default connect(mapStateToProps, mapDispatchToProps)(HireMe);
