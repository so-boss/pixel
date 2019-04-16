// ./fuse.js
const {
  FuseBox,
  WebIndexPlugin,
  SVGPlugin,
  CSSPlugin,
  //SassPlugin,
  PostCSSPlugin
} = require("fuse-box");

const fuse =  FuseBox.init({
  homeDir : "./src",
  output : "./dist/$name.js",
  useTypescriptCompiler : false,
  plugins: [
    [
      PostCSSPlugin([
        require("postcss-import"),
        // You can optionally pass options to the plugins
        //require("postcss-url")({ url: "rebase" }),
        require("postcss-nested"),
      ]),
      CSSPlugin(),
    ],
    CSSPlugin(),
    SVGPlugin(),
    WebIndexPlugin({
      template : "src/index.html"
    })
  ]
});

fuse.dev();

fuse
  .bundle("vendor")
  .instructions("~ index.js");

fuse
  .bundle("app")
  .instructions(" > index.js")
  .watch()
  .hmr();

fuse.run();
