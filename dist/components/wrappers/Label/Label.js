import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { Thing } from './../../index.js';
import React from "react";
import PropTypes from 'prop-types';

var accounting = require('accounting');

function CurrencyValue(_ref) {
  var quantity = _ref.quantity,
      joinWith = _ref.joinWith,
      children = _ref.children;
  var processedValue; // IF more than one value
  // i.e. $25K / $50K

  if (quantity && quantity > 1) {
    processedValue = children.join(joinWith);
  } else {
    // OTHERWISE only one value
    processedValue = accounting.formatMoney(children, "$", 0);
  }

  return processedValue;
}

CurrencyValue.defaultProps = {
  joinWith: " / ",
  multi: 1
};
CurrencyValue.propTypes = {
  quantity: PropTypes.number,
  joinWith: PropTypes.string,
  children: PropTypes.any
};
/*
  <Label currency="$">1000</Label>
  <Label currency="$" multi={2}>
    ["$1M", "$2M"]
   </Label>
*/

export default function Label(_ref2) {
  var currency = _ref2.currency,
      multi = _ref2.multi,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["currency", "multi", "children"]);

  return React.createElement(Thing, Object.assign({
    type: "label",
    currency: currency
  }, rest), !currency ? children : React.createElement(CurrencyValue, {
    quantity: multi
  }, children));
}
Label.defaultProps = {
  currency: false,
  multi: 1
}; // export default Label;
//