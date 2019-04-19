import { Container } from './../../index.js';

import * as React from 'react';
import * as PropTypes from 'prop-types';
import './Group.pcss';

export default function Group({children, ...rest}) {
  return (
    <Container
      tag={tag}
      {...rest}
    >
      {children}
    </Container>
  );
}
// const Group = props => React.createElement(
//   Container,
//   {
//     tag: props.tag,
//     id: props.id,
//     type: props.type
//   },
//   props.children
// );

Group.defaultProps = {
  tag: 'group',
};

Group.propTypes = {
  tag: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any
};

// export default class Group extends React.Component {
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
