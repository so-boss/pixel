import { Thing } from './../../index.js';

import React from "react";
import PropTypes from 'prop-types';
import './Label.pcss';

//const accounting = require('accounting');

// function CurrencyValue({quantity, joinWith, children}) {
//   let processedValue;
//
//   // IF more than one value
//   // i.e. $25K / $50K
//   if(quantity && quantity>1) {
//     processedValue = children.join(joinWith);
//   } else {
//     // OTHERWISE only one value
//     processedValue = accounting.formatMoney(children, "$", 0);
//   }
//
//   return processedValue;
// }
// CurrencyValue.defaultProps = {
//   joinWith:" / ",
//   multi:1
// };
// CurrencyValue.propTypes = {
//   quantity: PropTypes.integer,
//   joinWith: PropTypes.string,
//   children: PropTypes.any
// };

/*
  <Label currency="$">1000</Label>
  <Label currency="$" multi={2}>
    ["$1M", "$2M"]
   </Label>
*/
export default function Label ({ currency, multi, children, ...rest }) {
    return (
      <Thing
        type="label"
        {...rest}
      >
        {children}
      </Thing>
    );
}

Label.defaultProps = {
  currency:false,
  multi:1
}

Label.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  currency:PropTypes.any,
  multi:PropTypes.number,
  pixel: PropTypes.string,
  children: PropTypes.any
};

// export default Label;
//


