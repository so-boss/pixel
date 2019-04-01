import React from "react";

var Thing = function Thing(props) {
  return React.createElement('div', {
    id: props.id,
    type: props.type,
    pixel: props.pixel
  }, props.children);
};

Thing.defaultProps = {
  pixel: 'thing'
};
export default Thing; // export default class Thing extends Component {
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