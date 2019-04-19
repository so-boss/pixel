// ./fuse.js
const {
  FuseBox,
  Sparky,
  WebIndexPlugin,
  SVGPlugin,
  CSSPlugin,
  SassPlugin,
  CSSResourcePlugin,
  QuantumPlugin,
  PostCSSPlugin
} = require("fuse-box");

const {src, task, watch, context, fuse, bumpVersion } = require("fuse-box/sparky");

context(class {
  getConfig() {
    return FuseBox.init({
      package: "pixel",
      homeDir:"src",
      output:"dist/$name.js", //$name.js
      hash:false,//this.isProduction,
      //sourceMaps: { inline: true },
      target:"browser@es6",
      plugins:[
        // WebIndexPlugin({
        //   template:"src/index.html"
        // }),
        [
          PostCSSPlugin([require("postcss-import")]),
          CSSResourcePlugin({
            dist:"dist/css-resources"
          }),
          CSSPlugin({
            // group: 'pixel.css',
            // outFile: `dist/pixel.css`,
            // inject: true
          })
        ],
        this.isProduction && QuantumPlugin({
          bakeApiIntoBundle: "pixel",
          hash:false,
          containedAPI:true,
          treeshake: true,
          uglify:true,
          css:{
            clean:true
          }
          // cssFiles: {
          //   "default/components***": "elements.css"
          //},
          //extendServerImport:true
        })
      ]
    })
  }

  async clean() {
    await src("./dist")
      .clean("dist/")
      .exec();
  }
  async prepareDistFolder() {
    await bumpVersion("package.json", { type: "patch" });
    await src("./package.json")
      .dest("dist/")
      .exec();
  }
  async copyLib() {
    await src("./**", {
        base: './src'
      })
      .dest("dist/")
      .exec();
  }

  createBundle(fuse) {
    const app = fuse.bundle("pixel");
    if(!this.isProduction) {
      app.watch();
      //app.hmr();
    }
    app.instructions("> index.tsx");
    return app;
  }

  development() {
    const fuse = this.getConfig();
    fuse.dev();
    fuse
      .bundle("pixel")
      .watch()
      .completed(proc => proc.start())
      .instructions("> lib/index.js");
    fuse.run();
  }
});

task("default", async context => {
  await context.clean();
  await context.development();
});

task("dist", async context => {
  context.isProduction = true;
  await context.clean();
  await context.prepareDistFolder();

  const fuse = context.getConfig();
  //fuse.dev(); // Remove this later
  context.createBundle(fuse);
  await context.copyLib();
  await fuse.run();
});
