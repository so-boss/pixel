import React from 'react';
import PropTypes from 'prop-types';

export default function Wrapper ({ id, type, children, ...rest }) {
  return (
    <wrapper id={id} type={type} {...rest}>
      {children}
    </wrapper>
  );
}

// return (
//   <div id={id} type={type} pixel={pixel}>
//     {children}
//   </div>
// );

// const Wrapper = props => React.createElement(
//   'div',
//   {
//     id: props.id,
//     type: props.type,
//     pixel: props.pixel
//   },
//   props.children
// );

Wrapper.defaultProps = {
  pixel: 'wrapper',
};

Wrapper.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
  type: PropTypes.string,
  pixel: PropTypes.string
};

// export default Wrapper;
