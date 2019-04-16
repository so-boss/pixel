module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_js_1 = require(\"./../../index.js\");\nconst react_1 = require(\"react\");\nconst prop_types_1 = require(\"prop-types\");\n/*\n\n*/\nfunction Content({ children, ...rest }) {\n    return (react_1.default.createElement(index_js_1.Thing, Object.assign({ type: \"content\" }, rest), children));\n}\nexports.default = Content;\nContent.defaultProps = {};\nContent.propTypes = {\n    id: prop_types_1.default.string,\n    type: prop_types_1.default.string,\n    currency: prop_types_1.default.any,\n    multi: prop_types_1.default.number,\n    pixel: prop_types_1.default.string,\n    children: prop_types_1.default.any\n};\n",
dependencies: ["./../../index.js","react","prop-types"],
sourceMap: {},
headerContent: undefined,
mtime: 1555420486159,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
