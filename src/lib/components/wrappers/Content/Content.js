import { Thing } from './../../index.js';

import React from "react";
import PropTypes from 'prop-types';

/*

*/
export default function Content ({ children, ...rest }) {
    return (
      <Thing
        type="content"
        {...rest}
      >
        {children}
      </Thing>
    );
}

Content.defaultProps = {

}

Content.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  currency:PropTypes.any,
  multi:PropTypes.number,
  pixel: PropTypes.string,
  children: PropTypes.any
};
