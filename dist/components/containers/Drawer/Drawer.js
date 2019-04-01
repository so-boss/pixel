import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Container } from '@pixel/components'; // const Animate = Keyframes.Spring({
//   expand: {
//     to: {
//       marginTop:0,
//     },
//   },
//   collapse: {
//     to: {
//       marginTop: 0,
//     },
//     config:config.stiff,
//     onStart () {
//       this.to.marginTop = -this.store.$drawer.getBoundingClientRect().height;
//     },
//   },
// });

var Drawer =
/*#__PURE__*/
function (_Component) {
  _inherits(Drawer, _Component);

  function Drawer() {
    _classCallCheck(this, Drawer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Drawer).apply(this, arguments));
  }

  _createClass(Drawer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          drawer = _this$props.drawer,
          tag = _this$props.tag,
          rest = _objectWithoutProperties(_this$props, ["children", "drawer", "tag"]);
      /*
        <Animate
          drawer={drawer}
          state={drawer.expanded === false
            ? 'collapse'
            : 'expand'
          }
          {...rest}
        >
          {styles => (
       */


      return React.createElement(Container, Object.assign({
        tag: tag,
        drawer: drawer
      }, rest), children);
    }
  }]);

  return Drawer;
}(Component);

export { Drawer as default };
Drawer.displayName = 'Drawer';
Drawer.defaultProps = {
  type: 'primary',
  tag: 'drawer'
};