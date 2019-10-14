import { Wrapper } from './../../index.js'

import React from "react";
import PropTypes from 'prop-types';
import './Title.pcss';

// const title = props => React.createElement(
//   'div',
//   {
//     className: props.className,
//     sz: props.size
//   },
//   props.children
// );
//
// const Title = props => React.createElement(
//   Wrapper,
//   {
//     id: props.id,
//     type: props.type, // title
//     pixel: props.pixel
//   },
//   title
// );
//
// Title.defaultProps = {
//   type: 'title',
//   pixel: 'title'
// };
//
// title.propTypes = {
//   className: PropTypes.string,
//   size: PropTypes.string,
//   children: PropTypes.any
// };
// Title.propTypes = {
//   id: PropTypes.string,
//   type: PropTypes.string,
//   pixel: PropTypes.string
// };
//
// export default Title;

export default class Title extends React.Component {
  render () {
    const {
      children,
      ...rest
    } = this.props;

    /*
        <Title>A Text Title</Title>
     */
    return (
      <Wrapper
        type="title"
        {...rest}
      >
        <title>
          {children}
        </title>
      </Wrapper>
    );
  }
}
Title.defaultProps = {
  type: 'title',
  pixel: 'title'
};

// title.propTypes = {
//   className: PropTypes.string,
//   size: PropTypes.string,
//   children: PropTypes.any
// };
Title.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string
};
