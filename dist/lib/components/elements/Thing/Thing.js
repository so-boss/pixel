import * as React from 'react';
import * as PropTypes from 'prop-types';
import './Thing.pcss';

export default function Thing ({children, ...rest}) {
  return (
    <thing {...rest}>
      {children}
    </thing>
  );
}
// const Thing = props => React.createElement(
//   'div',
//   {
//     id: props.id,
//     type: props.type,
//     pixel: props.pixel,
//   },
//   props.children
// );

// Thing.defaultProps = {
//   pixel: 'thing',
// };

Thing.propTypes = {
  // id: PropTypes.string,
  // type: PropTypes.string,
  // pixel: PropTypes.string,
  children: PropTypes.any
};

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
