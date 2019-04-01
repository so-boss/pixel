import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { Component } from 'react';
import { Wrapper, Label, Message, InputSelect } from '@pixel/components';
import { Field, ErrorMessage } from 'formik';
import { FormContext } from '@pixel/components/wrappers/Inputs/Inputs.js';

function handleKeypress(e) {
  var state;

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


function FieldWrapper(_ref) {
  var type = _ref.type,
      name = _ref.name,
      label = _ref.label,
      mask = _ref.mask,
      value = _ref.value;
  return React.createElement(Wrapper, {
    type: "input",
    mask: mask
  }, React.createElement(Label, null, label), React.createElement(Field, {
    type: type,
    name: name,
    value: value,
    spellCheck: "false"
  }));
}

function SelectWrapper(_ref2) {
  var data = _ref2.data,
      label = _ref2.label,
      setFieldValue = _ref2.setFieldValue,
      setFieldTouched = _ref2.setFieldTouched,
      errors = _ref2.errors,
      touched = _ref2.touched,
      handleChange = _ref2.handleChange,
      handleBlur = _ref2.handleBlur,
      rest = _objectWithoutProperties(_ref2, ["data", "label", "setFieldValue", "setFieldTouched", "errors", "touched", "handleChange", "handleBlur"]);

  return React.createElement(Wrapper, {
    type: "input"
  }, React.createElement(Label, null, label), React.createElement(InputSelect, null));
}
/*
    <MessageWrapper
      type="error"
      name={name}
     />
*/


function MessageWrapper(_ref3) {
  var name = _ref3.name,
      type = _ref3.type;
  return React.createElement(Message, {
    intent: type
  }, React.createElement(ErrorMessage, {
    name: name,
    component: "thing"
  }));
}

var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          name = _this$props.name,
          mask = _this$props.mask,
          label = _this$props.label,
          rest = _objectWithoutProperties(_this$props, ["type", "name", "mask", "label"]);

      return React.createElement(FormContext.Consumer, null, function (data) {
        return React.createElement(Wrapper, Object.assign({
          type: "field",
          char_count: data.values[name].length,
          valid: data.errors[name] && data.touched[name] ? 'false' : 'true',
          state: "empty",
          onInput: handleKeypress,
          onFocus: handleKeypress,
          onBlur: handleKeypress
        }, rest), React.createElement(FieldWrapper, {
          type: type,
          name: name,
          label: label,
          mask: mask,
          value: data.values[name]
        }), React.createElement(MessageWrapper, {
          type: "error" // intent
          ,
          name: name
        }));
      });
    }
  }]);

  return Input;
}(Component);

export { Input as default };
Input.displayName = 'Input';
Input.defaultProps = {};