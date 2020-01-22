import { Container } from './../../index.js';

import React from 'react';
import PropTypes from 'prop-types';
import './Group.pcss';

// const Group = props => React.createElement(
//   Container,
//   {
//     tag: props.tag,
//     id: props.id,
//     type: props.type
//   },
//   props.children
// );
//
// Group.defaultProps = {
//   tag: 'group',
// };
//
// Group.propTypes = {
//   tag: PropTypes.string,
//   id: PropTypes.string,
//   type: PropTypes.string,
//   children: PropTypes.any
// };


//const Group = ({id, type, children, tag, ...rest}) => {
export default function Group ({id, type, children, tag, ...rest}) {
  return (
    <Container
      tag={tag}
      {...rest}
    >
      {children}
    </Container>
  );
}

Group.defaultProps = {
  tag: 'group',
};

Group.propTypes = {
  tag: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any
};
