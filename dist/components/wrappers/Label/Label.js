import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { Thing } from './../../index.js';
import React from "react";
export default function Label(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  // render () {
  //   const {
  //     children,
  //     ...rest
  //   } = this.props;
  return React.createElement(Thing, Object.assign({
    type: "label"
  }, rest), children); //}
} // const Label = props => React.createElement(
//  Thing,
//   {
//     id: props.id,
//     type: props.type,
//     pixel: props.pixel
//   },
//   props.children
// );
//
// Label.defaultProps = {
//   type: 'label',
//   pixel: 'label'
// };
// export default Label;
//