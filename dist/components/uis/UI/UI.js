import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';

var _ = require('lodash');

var uis = require('@pixel/components/uis/inventory.js');

var definedUI = function definedUI(id, element, props) {
  // this.displayName = 'UI';
  var packageID = id;

  if (!id) {
    packageID = 'def';
  }

  return uis[element][packageID].apply(this, [props]);
};

var UI =
/*#__PURE__*/
function (_Component) {
  _inherits(UI, _Component);

  function UI() {
    _classCallCheck(this, UI);

    return _possibleConstructorReturn(this, _getPrototypeOf(UI).apply(this, arguments));
  }

  _createClass(UI, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          element = _this$props.element,
          id = _this$props.id,
          rest = _objectWithoutProperties(_this$props, ["element", "id"]);

      return definedUI(id, element, this.props);
    }
  }]);

  return UI;
}(Component);

export { UI as default };

_.forIn(uis, function (obj, element) {
  UI[_.capitalize(element)] = function (props) {
    var id = props.id,
        rest = _objectWithoutProperties(props, ["id"]);

    return definedUI(id, element, props);
  };
});

UI.displayName = 'UI';
UI.defaultProps = {};