import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Action, Thing } from '@pixel/components/index';

var ActionLink =
/*#__PURE__*/
function (_Component) {
  _inherits(ActionLink, _Component);

  function ActionLink() {
    _classCallCheck(this, ActionLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(ActionLink).apply(this, arguments));
  }

  _createClass(ActionLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["id", "children"]);

      return React.createElement(Action, Object.assign({
        id: id,
        type: "link"
      }, props), React.createElement(Thing, null, children));
    }
  }]);

  return ActionLink;
}(Component);

export { ActionLink as default };
ActionLink.defaultProps = {};