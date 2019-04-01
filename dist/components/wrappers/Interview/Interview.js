import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Wrapper, Group } from '@pixel/components';

var Step = function Step(_ref) {
  var index = _ref.index,
      groupType = _ref.groupType,
      children = _ref.children,
      step = _ref.step;
  return React.createElement(Group, {
    step: index,
    active: step === index ? 'true' : 'false',
    type: groupType
  }, children);
};

var Interview =
/*#__PURE__*/
function (_Component) {
  _inherits(Interview, _Component);

  function Interview(props) {
    var _this;

    _classCallCheck(this, Interview);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Interview).call(this, props));
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.prev = _this.prev.bind(_assertThisInitialized(_this));
    _this.state = {
      step: 0
    };
    return _this;
  }

  _createClass(Interview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        step: 0
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var props = this.props;
      props.onStepChange();
    }
  }, {
    key: "next",
    value: function next() {
      this.setState(function (prevState, props) {
        return {
          step: prevState.step + 1
        };
      });
    }
  }, {
    key: "prev",
    value: function prev() {
      this.setState(function (prevState, props) {
        return {
          step: prevState.step - 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          type = _this$props.type,
          groupType = _this$props.groupType,
          steps = _this$props.steps,
          rest = _objectWithoutProperties(_this$props, ["children", "type", "groupType", "steps"]);

      var state = this.state;
      return React.createElement(Wrapper, Object.assign({
        type: type,
        step: state.step
      }, rest), React.createElement(Wrapper, {
        style: {
          width: "".concat(children.length * 100, "%")
        }
      }, children.map(function (child, index) {
        return React.createElement(Group, {
          step: index,
          active: index === 0 && 'true',
          style: {
            width: "calc(100% /".concat(children.length, ")")
          },
          type: groupType
        }, child);
      })));
    }
  }]);

  return Interview;
}(Component);

export { Interview as default };
Interview.defaultProps = {
  type: 'interview',
  groupType: 'question'
};