import React from 'react';
export default function Wrapper(_ref) {
  var id = _ref.id,
      type = _ref.type,
      pixel = _ref.pixel,
      children = _ref.children;
  return React.createElement("div", {
    id: id,
    type: type,
    pixel: pixel
  }, children);
} // const Wrapper = props => React.createElement(
//   'div',
//   {
//     id: props.id,
//     type: props.type,
//     pixel: props.pixel
//   },
//   props.children
// );

Wrapper.defaultProps = {
  pixel: 'wrapper'
}; // export default Wrapper;