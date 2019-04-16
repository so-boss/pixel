module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = require(\"react\");\nconst prop_types_1 = require(\"prop-types\");\nclass Button extends react_1.Component {\n    renderButton() {\n        const { children, type, ...rest } = this.props;\n        return (react_1.default.createElement(\"button\", Object.assign({ type: type }, rest), children));\n    }\n    render() {\n        return this.renderButton();\n    }\n}\nexports.default = Button;\nButton.defaultProps = {\n    type: 'button',\n};\nButton.propTypes = {\n    children: prop_types_1.default.any,\n    type: prop_types_1.default.string,\n};\n",
dependencies: ["react","prop-types"],
sourceMap: {},
headerContent: undefined,
mtime: 1555419218551,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
