import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Container } from '@pixel/components';

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tag = _this$props.tag,
          slots = _this$props.slots,
          rest = _objectWithoutProperties(_this$props, ["children", "tag", "slots"]);

      return React.createElement(Container, Object.assign({
        tag: tag,
        slots: slots
      }, rest), children);
    }
  }]);

  return Page;
}(Component);

export { Page as default };
Page.defaultProps = {
  tag: 'page',
  slots: {
    footer: {
      include: true
    }
  }
};