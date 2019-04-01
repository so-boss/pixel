import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import Icons from './sprite.svg';

var Icon =
/*#__PURE__*/
function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          hugeness = _this$props.hugeness;
      /*
        <Icon id='core-auto' hugeness='xs' />
      */

      return React.createElement("svg", {
        className: "icon pixel-".concat(id),
        hugeness: hugeness
      }, React.createElement("use", {
        xlinkHref: "".concat(Icons, "#pixel-").concat(id)
      }));
    }
  }]);

  return Icon;
}(Component); // Icon.UIs = require('@pixel/components/elements/Icon/ui.js')


export { Icon as default };
Icon.displayName = 'Icon';
Icon.defaultProps = {// drawer: 'false'
};