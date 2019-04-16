module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_js_1 = require(\"./../../index.js\");\nconst react_1 = require(\"react\");\nconst prop_types_1 = require(\"prop-types\");\nconst message = props => react_1.default.createElement('div', {}, props.children);\nconst Message = props => react_1.default.createElement(index_js_1.Wrapper, {\n    id: props.id,\n    type: props.type,\n    intent: props.intent,\n    pixel: props.pixel\n}, message);\nMessage.defaultProps = {\n    type: 'message',\n    pixel: 'message'\n};\nmessage.propTypes = {\n    children: prop_types_1.default.any\n};\nMessage.propTypes = {\n    id: prop_types_1.default.string,\n    type: prop_types_1.default.string,\n    intent: prop_types_1.default.string,\n    pixel: prop_types_1.default.string\n};\nexports.default = Message;\n/*\n    TODO: Restructure wrapper and type into something more semantic\n          like <message type=\"error\">\n          *** This will make typing easier instead of needing to shift\n          *** secondary type into a new prop I'm lazily calling intention\n*/\n// export default class Message extends Component {\n//   render () {\n//     const {\n//       children,\n//       id,\n//       intent\n//     } = this.props;\n//\n//     return (\n//       <Wrapper\n//         id={id}\n//         type=\"message\"\n//         intent={intent}\n//       >\n//         {children}\n//       </Wrapper>\n//     );\n//   }\n// }\n",
dependencies: ["./../../index.js","react","prop-types"],
sourceMap: {},
headerContent: undefined,
mtime: 1555419218564,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
