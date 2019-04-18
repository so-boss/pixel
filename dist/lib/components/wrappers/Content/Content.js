import { Thing } from './../../index.js';

import * as React from 'react';
import * as PropTypes from 'prop-types';
import './Content.pcss';
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
