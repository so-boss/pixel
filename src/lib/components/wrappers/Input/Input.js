import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.pcss';

import { Wrapper, Label, Message, InputSelect } from '../../';
import { Field, ErrorMessage } from 'formik';
import { FormContext } from '../../wrappers/Inputs/Inputs.js';

function handleKeypress (e) {
  let state;

  if (e.type === 'focus') {
    state = 'focused';
  }
  if (e.type === 'input') {
    state = 'typing';
  }
  if (e.type === 'blur') {
    state = 'idle';
  }

  return e.currentTarget.setAttribute('state', state);
}

/*
    <FieldWrapper
      type={type}
      name={name}
      label={label}
      mask={mask}
      value={values[name]}
    />
*/
function FieldWrapper ({ type, name, label, mask, value, }) {
  return (
    <Wrapper type="input" mask={mask}>
      <Label>{label}</Label>
      <Field
        type={type}
        name={name}
        value={value}
        spellCheck="false"
      />
    </Wrapper>
  );
}

function SelectWrapper ({ data, label, setFieldValue, setFieldTouched, errors, touched, handleChange, handleBlur, ...rest }) {
  return (
    <Wrapper type="input">
      <Label>{label}</Label>
      <InputSelect />
    </Wrapper>
  );
}

/*
    <MessageWrapper
      type="error"
      name={name}
     />
*/
function MessageWrapper ({ name, type }) {
  return (
    <Message intent={type}>
      <ErrorMessage name={name} component="thing" />
    </Message>
  );
}

export default class Input extends Component {
  render () {
    const {
      type, // text
      name, // email
      mask, // email@domain.com
      label, // email
      ...rest
    } = this.props;

    return (
      <FormContext.Consumer>
        {data => (
          <Wrapper
            type="field"
            char_count={
              data.values[name].length
            }
            valid={
              data.errors[name] && data.touched[name] ? 'false' : 'true'
            }
            state="empty"
            onInput={handleKeypress}
            onFocus={handleKeypress}
            onBlur={handleKeypress}
            {...rest}
          >
            <FieldWrapper
              type={type}
              name={name}
              label={label}
              mask={mask}
              value={data.values[name]}
            />
            <MessageWrapper
              type="error" // intent
              name={name}
            />
          </Wrapper>
        )}
      </FormContext.Consumer>
    );
  }
}

Input.displayName = 'Input';
Input.propTypes = {
  name: PropTypes.string,
};

Input.defaultProps = {

};
