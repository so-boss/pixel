import { configure, addParameters, addDecorator } from '@storybook/react';
//import { withInfo } from '@storybook/addon-info';

import csaa from './csaa';
import '../dist/index.css';
//import {GlobalStyle} from "pixel/src/storybook/components/shared/global";

//<GlobalStyle />
// addDecorator(story => (
//   <>
//     {story()}
//   </>
// ));

addParameters({
  options: {
    theme: csaa
  }
});

//configure(require.context("../src/lib/components", true, /\.stories\.js$/), module);
// const loaderFn = () => ([
//   //require.context('../../pixel/stories', true, /\.stories\.js$/),
//   require.context('../../pixel/src/lib/components', true, /\.stories\.js$/)
// ])

const req = require.context("../src/lib/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
