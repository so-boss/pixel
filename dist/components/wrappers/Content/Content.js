import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { Thing } from './../../index.js';
import React from "react";

/*

*/
export default function Content(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(Thing, Object.assign({
    type: "content"
  }, rest), children);
}
Content.defaultProps = {};