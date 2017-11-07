import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Phone from "react-phone-number-input";
import { Field as ReduxFormField } from "redux-form";

const renderField = (type, input, rest) => {
  switch (type) {
    case "phone":
      return <Phone {...input} {...rest} />;

    case "textarea":
      return <textarea {...input} {...rest} />;

    default:
      return <input {...input} type={type} {...rest} />;
  }
};

const FieldAdapter = ({
  type,
  input,
  meta: { touched, error, active, visited },
  ...rest
}) => (
  <div
    className={cx({
      focused: active,
      touched,
      visited,
      invalid: !!error
    })}
  >
    {renderField(type, input, rest)}
    <style jsx global>{`
      input,
      textarea {
        background-color: #eee;
        resize: none;
        margin-bottom: 25px;
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
        line-height: 1.4;
        padding: 6px 12px;
        outline: none;
        box-sizing: border-box;
      }

      input {
        height: 45px;
      }
      textarea {
        height: 150px;
        padding: 12px 12px;
      }

      .focused input,
      .focused textarea {
        border: 1px solid #000;
      }

      .invalid.touched.visited input,
      .invalid.touched.visited textarea {
        border: 1px solid #e74c3c;
      }
    `}</style>
  </div>
);

FieldAdapter.propTypes = {
  type: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired
  })
};

const Field = props => <ReduxFormField component={FieldAdapter} {...props} />;

export default Field;
