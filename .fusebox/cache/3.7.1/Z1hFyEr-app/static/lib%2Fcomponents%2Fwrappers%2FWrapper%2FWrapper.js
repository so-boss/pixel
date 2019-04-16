module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = require(\"react\");\nconst prop_types_1 = require(\"prop-types\");\nfunction Wrapper({ id, type, children, ...rest }) {\n    return (react_1.default.createElement(\"wrapper\", Object.assign({ id: id, type: type }, rest), children));\n}\nexports.default = Wrapper;\n// return (\n//   <div id={id} type={type} pixel={pixel}>\n//     {children}\n//   </div>\n// );\n// const Wrapper = props => React.createElement(\n//   'div',\n//   {\n//     id: props.id,\n//     type: props.type,\n//     pixel: props.pixel\n//   },\n//   props.children\n// );\nWrapper.defaultProps = {\n    pixel: 'wrapper',\n};\nWrapper.propTypes = {\n    children: prop_types_1.default.any,\n    id: prop_types_1.default.string,\n    type: prop_types_1.default.string,\n    pixel: prop_types_1.default.string\n};\n// export default Wrapper;\n",
dependencies: ["react","prop-types"],
sourceMap: {},
headerContent: undefined,
mtime: 1555427629986,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
