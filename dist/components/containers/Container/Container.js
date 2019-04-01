import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { Wrapper, Title } from './../../index.js';
import React from 'react';

var isObject = function isObject(value) {
  return typeof value === 'object' && typeof value !== 'function' && value !== undefined;
};

var isNamedSlots = function isNamedSlots(children) {
  return isObject(children) && 'body' in children;
};

var Container =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container(props) {
    var _this;

    _classCallCheck(this, Container);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Container).call(this, props));
    _this.containerEl = React.createRef();
    _this.getContainer = _this.getContainer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;
      this.getContainer(props);
    }
  }, {
    key: "getContainer",
    value: function getContainer(props) {
      var $container = this.containerEl.current;

      if (props.getContainer) {
        props.getContainer({
          $container: $container
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tag = _this$props.tag,
          slots = _this$props.slots,
          getContainer = _this$props.getContainer;

      if (!children) {
        throw new Error('children are missing !');
      }

      if (isNamedSlots(children)) {
        var header = children.header,
            body = children.body;
        var footer = children.footer; // IF no footer child is described

        if (!footer) {
          if (slots.footer.include !== false) {
            footer = React.createElement(Wrapper, {
              type: "footer"
            });
          } else {
            footer = null;
          }
        } else {
          // OTHERWISE a footer is descibed and should be rendered
          footer = React.createElement(Wrapper, {
            type: "footer"
          }, footer);
        }

        var ContainerElement = "".concat(tag);
        return React.createElement(ContainerElement, {
          getContainer: getContainer && this.getContainer,
          ref: this.containerEl
        }, React.createElement(Wrapper, null, header ? React.createElement(Wrapper, {
          type: "header"
        }, React.isValidElement(header) ? header : React.createElement(Title, null, header)) : null, React.createElement(Wrapper, {
          type: "body"
        }, body), footer));
      }

      return null;
    }
  }]);

  return Container;
}(React.Component);

export { Container as default };
Container.defaultProps = {
  slots: {
    header: {
      include: false
    },
    body: {
      include: true
    },
    footer: {
      include: false
    }
  }
};