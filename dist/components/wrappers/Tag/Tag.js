import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Block } from '@pixel/components';
/*
    <Tag
      icon="oneui-core-auto"
    >
      2017 Toyota Camry SE
    </Tag>
 */

var Tag =
/*#__PURE__*/
function (_Component) {
  _inherits(Tag, _Component);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tag).apply(this, arguments));
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme,
          icon = _this$props.icon,
          rest = _objectWithoutProperties(_this$props, ["children", "theme", "icon"]);
      /*
          NOTE: Only {theme} defined in css is grey
          (only paramaterized for extra flexability)
          I.E in Tag.pcss > @mixin theme grey;
      */


      return React.createElement("tag", Object.assign({
        theme: theme
      }, rest), React.createElement(Block, {
        icon: icon && {
          id: icon,
          size: 'xs'
        },
        lines: [children]
      }));
    }
  }]);

  return Tag;
}(Component);

export { Tag as default };
Tag.defaultProps = {
  theme: 'grey'
};