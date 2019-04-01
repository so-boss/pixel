import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';

var Action =
/*#__PURE__*/
function (_Component) {
  _inherits(Action, _Component);

  function Action(props) {
    var _this;

    _classCallCheck(this, Action);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Action).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Action, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.props.onActionBlockClick(e); // eslint-disable-line
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          type = _this$props.type,
          children = _this$props.children,
          indicatorProps = _this$props.indicatorProps,
          theme = _this$props.theme,
          drawer = _this$props.drawer; // TODO: Accomplish the ternary opt on drawer prop
      // without the following default object approach
      // on the next line the

      var drawerObj = drawer || {
        enabled: false,
        expanded: false
      };
      return React.createElement("action", Object.assign({
        id: id,
        drawer: drawer // {drawerObj.enabled === true && (drawerObj.expanded === false ? 'collapsed' : 'expanded')}
        ,
        indicator: indicatorProps && indicatorProps.type,
        type: type,
        theme: theme
      }, this.rest), children);
    }
  }]);

  return Action;
}(Component);

export { Action as default };
Action.displayName = 'Action';
Action.defaultProps = {// drawer: {
  //   enabled:false,
  //   expanded:true,
  // },
};