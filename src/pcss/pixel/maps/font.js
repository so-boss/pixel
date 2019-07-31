const font = {
  family: '(Helvetica, Arial, sans-serif)',
  weight: {
    def: 500,
    light: 300,
    normal: 500,
    bold: 700,
  },
  size: {
    def:'14px',
    xs:'12px',
    s:'14px',
    m:'16px',
    l:'20px',
    xl:'24px',
  },
  lineHeights:{
    def:"16px",
    xs:"16px",
    s:"20px",
    m:"22px"
  },
  smoothing:'antialiased',
  //rendering:'optimizeLegibility',
  rendering: {
    desktop:{
      "-webkit-font-smoothing": "antialiased",
      "-webkit-text-stroke": "0.45px #0000001a",
      "-moz-osx-font-smoothing": "grayscale",
      "text-shadow": "#fff 0px 1px 1px",
      "text-rendering": "optimizeLegibility"
    }
  }
};
font.rendering.def = font.rendering.desktop;

module.exports = font;
