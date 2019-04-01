import { Container } from './../../index.js';
import React from "react";

var Group = function Group(props) {
  return React.createElement(Container, {
    tag: props.tag,
    id: props.id,
    type: props.type
  }, props.children);
};

Group.defaultProps = {
  tag: 'group'
};
export default Group; // export default class Group extends Component {
//   render () {
//     const {
//       children,
//       tag,
//       ...rest
//     } = this.props;
//
//     return (
//       <Container
//         tag={tag}
//         {...rest}
//       >
//         {children}
//       </Container>
//     );
//   }
// }