import { Wrapper } from './../../index.js';
import React from "react";

var message = function message(props) {
  return React.createElement('div', {}, props.children);
};

var Message = function Message(props) {
  return React.createElement(Wrapper, {
    id: props.id,
    type: props.type,
    intent: props.intent,
    pixel: props.pixel
  }, message);
};

Message.defaultProps = {
  type: 'message',
  pixel: 'message'
};
export default Message;
/*
    TODO: Restructure wrapper and type into something more semantic
          like <message type="error">
          *** This will make typing easier instead of needing to shift
          *** secondary type into a new prop I'm lazily calling intention
*/
// export default class Message extends Component {
//   render () {
//     const {
//       children,
//       id,
//       intent
//     } = this.props;
//
//     return (
//       <Wrapper
//         id={id}
//         type="message"
//         intent={intent}
//       >
//         {children}
//       </Wrapper>
//     );
//   }
// }