import React from 'react';
//import PropTypes from 'prop-types';
import './Wrapper.pcss';

//const Wrapper = ({ id, type, children, ...rest }) => {
export default function Wrapper({ id, type, children, ...rest }){
  return (
    <wrapper id={id} type={type} {...rest}>
      {children}
    </wrapper>
  )
}

// Wrapper.defaultProps = {
//
// };
//
// Wrapper.propTypes = {
//   children: PropTypes.any,
//   id: PropTypes.string,
//   type: PropTypes.string
// };
