// ./fuse.js
const { FuseBox, WebIndexPlugin, SVGPlugin, CSSPlugin } = require("fuse-box");

const fuse =  FuseBox.init({
  homeDir : "./src",
  output : "./dist/$name.js",
  useTypescriptCompiler : false,
  plugins: [
    CSSPlugin(),
    SVGPlugin(),
    WebIndexPlugin({
      template : "src/index.html"
    })
  ]
});

fuse.dev();
fuse
  .bundle("app")
  .instructions(" > index.js")
  .watch()
  .hmr();
fuse.run();
