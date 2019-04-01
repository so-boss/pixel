import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Action, Button } from '@pixel/components/index';

var ActionButton =
/*#__PURE__*/
function (_Component) {
  _inherits(ActionButton, _Component);

  function ActionButton() {
    _classCallCheck(this, ActionButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ActionButton).apply(this, arguments));
  }

  _createClass(ActionButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          children = _this$props.children,
          disable = _this$props.disable,
          type = _this$props.type,
          props = _objectWithoutProperties(_this$props, ["id", "children", "disable", "type"]);

      return React.createElement(Action, Object.assign({
        id: id,
        type: type,
        disable: true
      }, props), React.createElement(Button, {
        disable: disable
      }, children));
    }
  }]);

  return ActionButton;
}(Component);

export { ActionButton as default };
ActionButton.defaultProps = {
  theme: 'primary',
  type: 'button'
};