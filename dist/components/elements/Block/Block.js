import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { Component } from 'react';
import { Wrapper, Action, Thing, Icon, Flag, Tag } from '@pixel/components';

var _ = require('lodash');

function Line(_ref) {
  var children = _ref.children;
  return React.createElement(Thing, null, children);
}

function Arrow(_ref2) {
  var type = _ref2.type;
  var arrows = {
    right: 'core-arrow-right',
    down: 'core-arrow-down'
  };
  return React.createElement(Icon, {
    id: arrows[type]
  });
}

function ActionLabel(_ref3) {
  var children = _ref3.children;
  return React.createElement(Action, {
    type: "label"
  }, React.createElement(Thing, null, children));
}
/*
    <Column hugeness='m'>
      <Icon />
    </Column>
 */


function Column(_ref4) {
  var children = _ref4.children,
      rest = _objectWithoutProperties(_ref4, ["children"]);

  return React.createElement(Wrapper, rest, children);
}
/*
    <Col1 icon={{
      id:'oneui-core-auto',
      size:'s',
    }} />
 */


var ColumnOne = function ColumnOne(_ref5) {
  var icon = _ref5.icon;
  return React.createElement(Column, {
    hugeness: icon.id && icon.size
  }, icon.id && React.createElement(Icon, {
    id: icon.id
  }));
};
/*
    <Col2 lines={[
        'CAAS100383547',
        'Policy Period 12/31/2018 to 12/31/2019',
        false,
        'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
      ]}
    />
 */


var ColumnTwo = function ColumnTwo(_ref6) {
  var lines = _ref6.lines;
  return React.createElement(Column, null, lines.map(function (line) {
    return React.createElement(Line, null, line && (_.isArray(line) ? line.map(function (listLine) {
      return listLine.element === 'flag' ? React.createElement(Flag, {
        theme: listLine.theme
      }, listLine.label) // React.createElement('Flag', null, 'test')//CustomTag(listLine)
      : React.createElement(Tag, {
        icon: listLine.icon
      }, listLine.label);
    }) : line));
  }));
};

var ColumnThree = function ColumnThree(_ref7) {
  var children = _ref7.children,
      indicator = _ref7.indicator;
  return React.createElement(Column, null, indicator && (indicator.text ? React.createElement(ActionLabel, null, indicator.text) : React.createElement(Arrow, {
    type: indicator.orientation
  })), children);
};

var Block =
/*#__PURE__*/
function (_Component) {
  _inherits(Block, _Component);

  function Block(props) {
    var _this;

    _classCallCheck(this, Block);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Block).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Block, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.stopPropagation();
      this.props.onActionBlockClick(e); // eslint-disable-line
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          lines = _this$props.lines,
          flag = _this$props.flag,
          indicatorProps = _this$props.indicatorProps,
          onActionBlockClick = _this$props.onActionBlockClick;
      return React.createElement("block", {
        onClick: onActionBlockClick && this.handleClick
      }, React.createElement(Wrapper, null, React.createElement(ColumnOne, {
        icon: icon
      }), React.createElement(ColumnTwo, {
        lines: lines
      }), React.createElement(ColumnThree, {
        indicator: indicatorProps
      }, flag && React.createElement(Flag, {
        theme: flag.theme
      }, flag.label))));
    }
  }]);

  return Block;
}(Component);

export { Block as default };
Block.displayName = 'Block';
Block.defaultProps = {
  icon: {
    id: false
  }
};