import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { Component } from 'react';
import { Action, Block, Drawer } from '@pixel/components/index';

function PreconfiguredAction(_ref) {
  var id = _ref.id,
      drawer = _ref.drawer,
      indicatorProps = _ref.indicatorProps,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["id", "drawer", "indicatorProps", "children"]);

  return React.createElement(Action, Object.assign({
    id: id // type={drawer}
    ,
    indicatorProps: indicatorProps,
    drawer: drawer
  }, props), React.createElement(Block, Object.assign({
    indicatorProps: indicatorProps
  }, props)), children);
}

var ActionBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(ActionBlock, _Component);

  function ActionBlock() {
    _classCallCheck(this, ActionBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(ActionBlock).apply(this, arguments));
  }

  _createClass(ActionBlock, [{
    key: "renderChildren",
    value: function renderChildren() {
      var children = this.props.children;
      return React.Children.map(children, function (child) {
        return React.cloneElement(child, {});
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          children = _this$props.children,
          indicator = _this$props.indicator,
          drawer = _this$props.drawer;
      var indicatorObj = {
        type: false,
        text: null,
        orientation: false
      }; // If indicator IS NOT ARROW

      if (indicator !== 'arrow') {
        // BECAUSE indicator is NOT specified
        if (!indicator) {
          // THEN indicator is hidden (default)
          indicatorObj.type = false;
        } else {
          // OTHERWISE indicator is TEXT LABEL
          indicatorObj.type = 'text';
          indicatorObj.text = indicator;
        }
      } else {
        // OTHERWISE indicator is an arrow
        // AND should be oriented right (def)
        indicatorObj.type = 'arrow';
        indicatorObj.orientation = 'right';
      } // If Drawer Exists becasue it's passed as a child
      //                  because it's set to 'expanded' or 'true' via the drawer prop (temp measure until state is added back in)


      if (children && children.type.displayName === 'Drawer' || drawer && drawer === ('expanded' || 'true')) {
        // THEN orient arrow down
        indicatorObj.orientation = 'down';
        return React.createElement("wrapper", null, React.createElement(PreconfiguredAction // onActionBlockClick={this.handleActionBlockClick}
        , Object.assign({
          id: id // drawer={drawer}
          ,
          indicatorProps: indicatorObj
        }, this.props), children));
      }

      return React.createElement(PreconfiguredAction, Object.assign({
        id: id,
        indicatorProps: indicatorObj
      }, this.props), children);
    }
  }]);

  return ActionBlock;
}(Component);

export { ActionBlock as default };
ActionBlock.displayName = 'ActionBlock';
ActionBlock.defaultProps = {};