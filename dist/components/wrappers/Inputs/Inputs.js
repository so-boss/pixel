import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Formik, Form } from 'formik';
export var FormContext = React.createContext();
/*
    <Inputs
      id="names_form"
      initialValues={{
        name_first: '',
        name_last: '',
        name_full: '',
      }}
      validationSchema={validationSchema}
    >
      <UI.Field id="name_first"/>
      <UI.Field id="name_last" />
      <UI.Field id="name_full" />
    </Inputs>
*/

var Inputs =
/*#__PURE__*/
function (_Component) {
  _inherits(Inputs, _Component);

  function Inputs() {
    _classCallCheck(this, Inputs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Inputs).apply(this, arguments));
  }

  _createClass(Inputs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          children = _this$props.children,
          initialValues = _this$props.initialValues,
          validationSchema = _this$props.validationSchema;
      return React.createElement(Formik, {
        initialValues: initialValues,
        validationSchema: validationSchema,
        render: function render(_ref) {
          var form = _extends({}, _ref);

          return React.createElement(FormContext.Provider, {
            value: _objectSpread({}, form)
          }, React.createElement(Form, {
            id: id,
            autoComplete: "off"
          }, children));
        }
      });
    }
  }]);

  return Inputs;
}(Component);

export { Inputs as default };
Inputs.displayName = 'Inputs';
Inputs.defaultProps = {};