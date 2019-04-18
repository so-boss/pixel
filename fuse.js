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
      sourceMaps: { inline: false },
      target:"browser",
      plugins:[
        WebIndexPlugin({
          template:"src/index.html"
        }),
        [
          PostCSSPlugin([require("postcss-import")],{
            sourceMaps: true
          }),
          CSSResourcePlugin({
            dist:"dist/css-resources"
          }),
          CSSPlugin({
            group: 'pixel.css',
            outFile: `dist/pixel.css`,
            inject: true
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
      app.hmr();
    }
    app.instructions(">index.tsx");
    return app;
  }

  development() {
    const fuse = this.getConfig();
    fuse.dev();
    fuse
      .bundle("pixel")
      .watch()
      .completed(proc => proc.start())
      .instructions(">index.tsx");
    fuse.run();
  }
});

// task("clean", async context => {
//   await src("./dist")
//     .clean("dist/")
//     .exec();
// });
//
// task("watch:images", async context => {
//   await watch("**/*.+(svg|png|jpg|gif)", {base: "./src"})
//     .dest("./dist");
// });

//task("copy-src", () => src("./**", { base: './src' }).dest("dist/"));
// task("copy-pkg", () => src("./package.json").dest("dist/"));

// task("default", ["clean"], async context => {
//   bumpVersion("package.json", { type: "patch" });
//   const fuse = context.getConfig();
//   fuse.dev();
//   context.createBundle(fuse);
//   await fuse.run();
// });
task("default", async context => {
  await context.clean();
  await context.development();
});

// task("dist", ["clean"], async context => {
//   bumpVersion("package.json", { type: "patch" });
//   context.isProduction = true;
//   const fuse = context.getConfig();
//   fuse.dev(); // Remove this later
//   context.createBundle(fuse);
//   await fuse.run();
// });

task("dist", async context => {
  context.isProduction = true;
  await context.clean();
  await context.prepareDistFolder();

  const fuse = context.getConfig();
  fuse.dev(); // Remove this later
  context.createBundle(fuse);
  await context.copyLib();
  await fuse.run();
});


/*

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
*/
