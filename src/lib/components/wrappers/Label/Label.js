import { Thing } from './../../index.js';

import React from "react";
import PropTypes from 'prop-types';

export default function Label ({ children, ...rest }) {
    // render () {
    //   const {
    //     children,
    //     ...rest
    //   } = this.props;

    return (
      <Thing type="label" {...rest}>
          {children}
      </Thing>
    );
    //}
}

// const Label = props => React.createElement(
//  Thing,
//   {
//     id: props.id,
//     type: props.type,
//     pixel: props.pixel
//   },
//   props.children
// );
//
// Label.defaultProps = {
//   type: 'label',
//   pixel: 'label'
// };

Label.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  pixel: PropTypes.string,
  children: PropTypes.any
};

// export default Label;
//


