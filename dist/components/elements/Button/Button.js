import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "renderButton",
    value: function renderButton() {
      var _this$props = this.props,
          children = _this$props.children,
          type = _this$props.type,
          rest = _objectWithoutProperties(_this$props, ["children", "type"]);

      return React.createElement("button", Object.assign({
        type: type
      }, rest), children);
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderButton();
    }
  }]);

  return Button;
}(Component);

export { Button as default };
Button.defaultProps = {
  type: 'button'
};