import { Container } from './../../index.js';

import React from "react";
import PropTypes from 'prop-types';

const Group = props => React.createElement(
  Container,
  {
    tag: props.tag,
    id: props.id,
    type: props.type
  },
  props.children
);

Group.defaultProps = {
  tag: 'group',
};

Group.propTypes = {
  tag: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any
};

export default Group;

// export default class Group extends Component {
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
