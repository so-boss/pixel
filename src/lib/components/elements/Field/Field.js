import React from "react";
import PropTypes from 'prop-types';

import { Wrapper, Label } from './../../index.js';
import { Form, Input, Button, Checkbox  } from 'antd';
import 'antd/dist/antd.css';
import './Field.pcss';
import { FormContext } from '../../wrappers/Inputs/Inputs'

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
    <Field
      id="full_name"
      label="Full Name"
      rules={[
        {
          required: true,
          message: 'Please input your full name',
        },
      ]}
    />
*/

export default function Field ({ type, value, label, name, id, rules, placeholder, mask }) {
  return (
        <Form.Item
          name={name}
          type={type}
          value={value}
          label={label}
          rules={rules}
          onInput={handleKeypress}
          onFocus={handleKeypress}
          onBlur={handleKeypress}
          state="empty"

        >
          <Input
            id={id||name}
            placeholder={mask||placeholder||label}
            autoComplete="off"
          />
        </Form.Item>
  )
}

Field.propTypes = {
  type: PropTypes.string,
  value:PropTypes.string,
  label:PropTypes.string
};
