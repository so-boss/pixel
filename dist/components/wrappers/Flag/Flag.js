import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Block } from '@pixel/components';

var Flag =
/*#__PURE__*/
function (_Component) {
  _inherits(Flag, _Component);

  function Flag() {
    _classCallCheck(this, Flag);

    return _possibleConstructorReturn(this, _getPrototypeOf(Flag).apply(this, arguments));
  }

  _createClass(Flag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme,
          rest = _objectWithoutProperties(_this$props, ["children", "theme"]);

      return React.createElement("flag", Object.assign({
        theme: theme
      }, rest), React.createElement(Block, {
        lines: [children]
      }));
    }
  }]);

  return Flag;
}(Component);

export { Flag as default };
Flag.defaultProps = {
  theme: 'grey'
};