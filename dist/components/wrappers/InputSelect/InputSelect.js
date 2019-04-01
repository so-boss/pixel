import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React, { Component } from 'react';
import { Wrapper } from '@pixel/components';
import Select from 'react-select';
var customStyles = {
  control: function control(provided, state) {
    return _objectSpread({}, provided);
  },
  valueContainer: function valueContainer(provided, state) {
    return _objectSpread({}, provided, {
      padding: '0px'
    });
  },
  placeholder: function placeholder(provided, state) {
    return _objectSpread({}, provided, {
      marginLeft: '0px'
    });
  },
  singleValue: function singleValue(provided, state) {
    var opacity = state.isDisabled ? 0.5 : 1;
    var transition = 'opacity 300ms';
    return {
      // ...provided,
      opacity: opacity,
      transition: transition,
      // bottom:'5px',
      top: 'unset',
      marginLeft: '0px'
    };
  }
};

var InputSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(InputSelect, _Component);

  function InputSelect(props) {
    var _this;

    _classCallCheck(this, InputSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputSelect).call(this, props));
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.state = {
      inputValue: _this.props.inputValue
    };
    return _this;
  }
  /*
      console.log(inputValue.value, action);
  */


  _createClass(InputSelect, [{
    key: "onInputChange",
    value: function onInputChange(inputValue, _ref) {
      var action = _ref.action;
      var methods = {
        'input-change': function inputChange() {
          this.setState({
            inputValue: inputValue
          });
        },
        'menu-close': function menuClose() {
          var menuIsOpen;

          if (inputValue) {
            menuIsOpen = true;
          }

          this.setState({
            menuIsOpen: menuIsOpen
          });
        },
        def: function def() {}
      };
      var method = methods[action];

      if (!method) {
        method = methods.def;
      }

      return method.apply(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          inputValue = _this$state.inputValue,
          menuIsOpen = _this$state.menuIsOpen;
      var children = this.props.children;
      return React.createElement(Wrapper, {
        type: "select_input"
      }, React.createElement(Select, {
        className: "px-select",
        classNamePrefix: "px",
        options: children.options // Note:Have open for debugging
        ,
        defaultValue: children.options[2],
        inputValue: inputValue,
        menuIsOpen: menuIsOpen,
        onChange: this.onInputChange
      }));
    }
  }]);

  return InputSelect;
}(Component);

export { InputSelect as default };
InputSelect.displayName = 'InputSelect';
InputSelect.defaultProps = {};