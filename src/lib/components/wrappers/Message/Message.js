import { Wrapper } from './../../index.js';

import React from "react";
import PropTypes from 'prop-types';
import './Message.pcss';

const message = props => React.createElement(
  'div',
  {

  },
  props.children
);

const Message = props => React.createElement(
  Wrapper,
  {
    id: props.id,
    type: props.type,
    intent: props.intent,
    pixel: props.pixel
  },
  message
);

Message.defaultProps = {
  type: 'message',
  pixel: 'message'
};

message.propTypes = {
  children: PropTypes.any
};
Message.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  intent: PropTypes.string,
  pixel: PropTypes.string
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

