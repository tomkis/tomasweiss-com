import React, { PropTypes } from 'react';
import cx from 'classnames';
import Phone from 'react-phone-number-input';

const renderField = (type, input) => {
  switch (type) {
    case 'email':
      return <input type="email" {...input} />;

    case 'textarea':
      return <textarea {...input} />;

    case 'phone':
      return <Phone {...input} />;

    default:
      throw new Error(`Unknown field type ${type}`);
  }
};

const FieldAdapter = ({
  type,
  input,
  meta: {
    touched,
    error
  }
}) => (
  <div
    className={cx({
      touched,
      invalid: !!error
    })}
  >
    {renderField(type, input)}
  </div>
);

FieldAdapter.propTypes = {
  type: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
                                      // It's totally OK to define the input as object.
                                      // This component does not need to know anything
                                      // about its internal structure, the only thing
                                      // that matters is that the prop is spreadable object
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired
  })
};

export default FieldAdapter;
