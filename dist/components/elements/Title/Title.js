import { Wrapper } from './../../index.js';
import React from "react";

var title = function title(props) {
  return React.createElement('div', {
    className: props.className,
    sz: props.size
  }, props.children);
};

var Title = function Title(props) {
  return React.createElement(Wrapper, {
    id: props.id,
    type: props.type,
    // title
    pixel: props.pixel
  }, title);
};

Title.defaultProps = {
  type: 'title',
  pixel: 'title'
};
export default Title; // export default class Title extends Component {
//   render () {
//     const {
//       children,
//       ...rest
//     } = this.props;
//
//     /*
//         <Title>A Text Title</Title>
//      */
//     return (
//       <Wrapper
//         type="title"
//         {...rest}
//       >
//         <title>
//           {children}
//         </title>
//       </Wrapper>
//     );
//   }
// }