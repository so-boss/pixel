module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_js_1 = require(\"./../../index.js\");\nconst react_1 = require(\"react\");\nconst prop_types_1 = require(\"prop-types\");\nconst Group = props => react_1.default.createElement(index_js_1.Container, {\n    tag: props.tag,\n    id: props.id,\n    type: props.type\n}, props.children);\nGroup.defaultProps = {\n    tag: 'group',\n};\nGroup.propTypes = {\n    tag: prop_types_1.default.string,\n    id: prop_types_1.default.string,\n    type: prop_types_1.default.string,\n    children: prop_types_1.default.any\n};\nexports.default = Group;\n// export default class Group extends React.Component {\n//   render () {\n//     const {\n//       children,\n//       tag,\n//       ...rest\n//     } = this.props;\n//\n//     return (\n//       <Container\n//         tag={tag}\n//         {...rest}\n//       >\n//         {children}\n//       </Container>\n//     );\n//   }\n// }\n",
dependencies: ["./../../index.js","react","prop-types"],
sourceMap: {},
headerContent: undefined,
mtime: 1555427629985,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
