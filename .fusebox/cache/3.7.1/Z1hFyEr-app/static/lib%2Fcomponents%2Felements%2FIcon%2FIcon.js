module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = require(\"react\");\nconst prop_types_1 = require(\"prop-types\");\nconst sprite_svg_1 = require(\"./sprite.svg\");\nclass Icon extends react_1.Component {\n    render() {\n        const { id, hugeness, } = this.props;\n        /*\n          <Icon id='core-auto' hugeness='xs' />\n       */\n        return (react_1.default.createElement(\"svg\", { className: `icon pixel-${id}`, hugeness: hugeness },\n            react_1.default.createElement(\"use\", { xlinkHref: `${sprite_svg_1.default}#pixel-${id}` })));\n    }\n}\nexports.default = Icon;\n// Icon.UIs = require('@pixel/components/elements/Icon/ui.js')\nIcon.displayName = 'Icon';\nIcon.propTypes = {\n    id: prop_types_1.default.string,\n};\nIcon.defaultProps = {\n// drawer: 'false'\n};\n",
dependencies: ["react","prop-types","./sprite.svg"],
sourceMap: {},
headerContent: undefined,
mtime: 1555419218552,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
