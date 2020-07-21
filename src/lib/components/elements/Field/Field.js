import React from "react";
import PropTypes from 'prop-types';

import { Wrapper, Label } from './../../index.js';
import { Form, Input, Button, Checkbox  } from 'antd';
import 'antd/dist/antd.css';
import './Field.pcss';

/*
    <Wrapper pixel="field">
      <Label>{value}</Label>
      <Label type={type}>{label}</Label>

    </Wrapper>
 */
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

export default function Field ({ type, value, label, name, id, rules, placeholder }) {
  return (
    <Form.Item
      name={name}
      type={type}
      value={value}
      label={label}
      rules={rules}
    >
      <Input
        id={id||name}
        placeholder={label||placeholder}
      />
    </Form.Item>
  );
}

Field.propTypes = {
  type: PropTypes.string,
  value:PropTypes.string,
  label:PropTypes.string
};
