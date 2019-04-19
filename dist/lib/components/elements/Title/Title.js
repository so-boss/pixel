import { Wrapper } from './../../index.js'

import * as React from 'react';
import * as PropTypes from 'prop-types'
import './Title.pcss';

// const title = props => React.createElement(
//   'div',
//   {
//     className: props.className,
//     sz: props.size
//   },
//   props.children
// );

// const Title = props => React.createElement(
//   Wrapper,
//   {
//     id: props.id,
//     type: props.type, // title
//     pixel: props.pixel
//   },
//   title
// );

export default function Title ({children, ...rest}) {
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

Title.propTypes = {
  // id: PropTypes.string,
  // type: PropTypes.string,
  // pixel: PropTypes.string,
  children: PropTypes.any
};
