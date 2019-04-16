module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_js_1 = require(\"./../../index.js\");\nconst react_1 = require(\"react\");\nconst prop_types_1 = require(\"prop-types\");\nfunction Field({ type, value, label }) {\n    return (react_1.default.createElement(index_js_1.Wrapper, { pixel: \"field\" },\n        react_1.default.createElement(index_js_1.Label, null, value),\n        react_1.default.createElement(index_js_1.Label, { type: type }, label)));\n}\nField.propTypes = {\n    type: prop_types_1.default.string,\n    value: prop_types_1.default.string,\n    label: prop_types_1.default.string\n};\nexports.default = Field;\n",
dependencies: ["./../../index.js","react","prop-types"],
sourceMap: {},
headerContent: undefined,
mtime: 1555419218551,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
