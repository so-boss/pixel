module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_js_1 = require(\"./../../index.js\");\nconst react_1 = require(\"react\");\nconst prop_types_1 = require(\"prop-types\");\n// const title = props => React.createElement(\n//   'div',\n//   {\n//     className: props.className,\n//     sz: props.size\n//   },\n//   props.children\n// );\n// const Title = props => React.createElement(\n//   Wrapper,\n//   {\n//     id: props.id,\n//     type: props.type, // title\n//     pixel: props.pixel\n//   },\n//   title\n// );\nconst Title = ({ children, ...rest }) => (react_1.default.createElement(index_js_1.Wrapper, Object.assign({ type: \"title\" }, rest),\n    react_1.default.createElement(\"title\", null, children)));\n// Title.defaultProps = {\n//   type: 'title',\n//   pixel: 'title'\n// };\n// title.propTypes = {\n//   className: PropTypes.string,\n//   size: PropTypes.string,\n//   children: PropTypes.any\n// };\nTitle.propTypes = {\n    // id: PropTypes.string,\n    // type: PropTypes.string,\n    // pixel: PropTypes.string,\n    children: prop_types_1.default.any\n};\nexports.default = Title;\n// export default class Title extends Component {\n//   render () {\n//     const {\n//       children,\n//       ...rest\n//     } = this.props;\n//\n//     /*\n//         <Title>A Text Title</Title>\n//      */\n//     return (\n//       <Wrapper\n//         type=\"title\"\n//         {...rest}\n//       >\n//         <title>\n//           {children}\n//         </title>\n//       </Wrapper>\n//     );\n//   }\n// }\n",
dependencies: ["./../../index.js","react","prop-types"],
sourceMap: {},
headerContent: undefined,
mtime: 1555427629985,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
