import React from "react";
import PropTypes from 'prop-types';

const Thing = props => React.createElement(
  'div',
  {
    id: props.id,
    type: props.type,
    pixel: props.pixel,
  },
  props.children
);

Thing.defaultProps = {
  pixel: 'thing',
};

Thing.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  pixel: PropTypes.string,
  children: PropTypes.any
};

export default Thing;

// export default class Thing extends Component {
//   render () {
//     const {
//       children,
//       ...rest
//     } = this.props;
//
//     /*
//         <Thing content='Policy Period 12/31...' />
//      */
//     return (
//       <thing {...rest}>
//         {children}
//       </thing>
//     );
//   }
// }
