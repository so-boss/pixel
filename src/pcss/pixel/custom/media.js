/*
    @media (--xs-screen) {
      body {
        color: var(--mainColor);
      }
    }
*/

module.exports = {
  customMedia: {
    '--xs-screen': '(max-width: var(--smallest-screen-width))', //compact
    '--s-screen': '(max-width: 544px)', //phone
    '--m-screen': '(max-width: 768px)', //tablet  >    @media only screen and (max-width: 40em) {
    '--l-screen': '(max-width: 992px)', //desktop
    '--xl-screen': '(min-width: 1200px)', //comfortable,
    "--extraSmall": "(max-width: 576px)",
    "--phone": "(min-width: 544px)",
    "--tablet": "(min-width: 768px)",
    "--desktop": "(min-width: 992px)",
    "--largeDesktop": "(min-width: 120px)"
  }
}
