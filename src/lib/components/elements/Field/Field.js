import { Wrapper, Label } from './../../index.js';

import React from "react";
import PropTypes from 'prop-types';

function Field ({ type, value, label }) {
  return (
    <Wrapper pixel="field">
      <Label>{value}</Label>
      <Label type={type}>{label}</Label>
    </Wrapper>
  );
}

Field.propTypes = {
  type: PropTypes.string,
  value:PropTypes.string,
  label:PropTypes.string
};

export default Field;
