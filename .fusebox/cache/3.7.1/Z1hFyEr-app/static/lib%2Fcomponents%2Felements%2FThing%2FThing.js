module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = require(\"react\");\nconst prop_types_1 = require(\"prop-types\");\nconst Thing = props => react_1.default.createElement('div', {\n    id: props.id,\n    type: props.type,\n    pixel: props.pixel,\n}, props.children);\nThing.defaultProps = {\n    pixel: 'thing',\n};\nThing.propTypes = {\n    id: prop_types_1.default.string,\n    type: prop_types_1.default.string,\n    pixel: prop_types_1.default.string,\n    children: prop_types_1.default.any\n};\nexports.default = Thing;\n// export default class Thing extends Component {\n//   render () {\n//     const {\n//       children,\n//       ...rest\n//     } = this.props;\n//\n//     /*\n//         <Thing content='Policy Period 12/31...' />\n//      */\n//     return (\n//       <thing {...rest}>\n//         {children}\n//       </thing>\n//     );\n//   }\n// }\n",
dependencies: ["react","prop-types"],
sourceMap: {},
headerContent: undefined,
mtime: 1555419218553,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
