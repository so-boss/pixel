import { Wrapper, Label } from './../../index.js';
import React from "react";

function Field(_ref) {
  var type = _ref.type,
      value = _ref.value,
      label = _ref.label;
  return React.createElement(Wrapper, {
    pixel: "field"
  }, React.createElement(Label, null, value), React.createElement(Label, {
    type: type
  }, label));
}

export default Field;