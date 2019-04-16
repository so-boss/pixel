module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_js_1 = require(\"./../../index.js\");\nconst react_1 = require(\"react\");\nconst prop_types_1 = require(\"prop-types\");\nconst isObject = function (value) {\n    return typeof value === 'object' && typeof value !== 'function' && value !== undefined;\n};\nconst isNamedSlots = function (children) {\n    return isObject(children) && 'body' in children;\n};\nclass Container extends react_1.default.Component {\n    constructor(props) {\n        super(props);\n        this.containerEl = react_1.default.createRef();\n        this.getContainer = this.getContainer.bind(this);\n    }\n    componentDidMount() {\n        const { props, } = this;\n        this.getContainer(props);\n    }\n    getContainer(props) {\n        const $container = this.containerEl.current;\n        if (props.getContainer) {\n            props.getContainer({\n                $container,\n            });\n        }\n    }\n    render() {\n        const { children, tag, slots, \n        // drawer,\n        getContainer\n        // ...rest\n         } = this.props;\n        if (!children) {\n            throw new Error('children are missing !');\n        }\n        if (isNamedSlots(children)) {\n            const { header, body, } = children;\n            let { footer, } = children;\n            // IF no footer child is described\n            if (!footer) {\n                if (slots.footer.include !== false) {\n                    footer = react_1.default.createElement(index_js_1.Wrapper, { type: \"footer\" });\n                }\n                else {\n                    footer = null;\n                }\n            }\n            else {\n                // OTHERWISE a footer is descibed and should be rendered\n                footer = react_1.default.createElement(index_js_1.Wrapper, { type: \"footer\" }, footer);\n            }\n            const ContainerElement = `${tag}`;\n            return (react_1.default.createElement(ContainerElement, { getContainer: getContainer && this.getContainer, ref: this.containerEl },\n                react_1.default.createElement(index_js_1.Wrapper, null,\n                    header\n                        ? (react_1.default.createElement(index_js_1.Wrapper, { type: \"header\" }, react_1.default.isValidElement(header)\n                            ? header\n                            : react_1.default.createElement(index_js_1.Title, null, header)))\n                        : null,\n                    react_1.default.createElement(index_js_1.Wrapper, { type: \"body\" }, body),\n                    footer)));\n        }\n        return null;\n    }\n}\nexports.default = Container;\nContainer.defaultProps = {\n    slots: {\n        header: {\n            include: false,\n        },\n        body: {\n            include: true,\n        },\n        footer: {\n            include: false,\n        },\n    },\n};\nContainer.propTypes = {\n    children: prop_types_1.default.object,\n    tag: prop_types_1.default.string,\n    slots: prop_types_1.default.object,\n    // drawer: PropTypes.any,\n    getContainer: prop_types_1.default.element\n};\n",
dependencies: ["./../../index.js","react","prop-types"],
sourceMap: {},
headerContent: undefined,
mtime: 1555419218547,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}