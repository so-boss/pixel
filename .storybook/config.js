//import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
//configure(require.context('../stories', true, /\.stories\.js$/), module);

import { configure, addParameters, addDecorator } from '@storybook/react';
//import { withInfo } from '@storybook/addon-info';

import csaa from './csaa';
import '../dist/index.css'
//import {GlobalStyle} from "pixel/src/storybook/components/shared/global";


// const loaderFn = () => ([
//   //require.context('../../pixel/stories', true, /\.stories\.js$/),
//   require.context('../../pixel/src/lib/components', true, /\.stories\.js$/)
// ])

//<GlobalStyle />
// addDecorator(story => (
//   <>
//     {story()}
//   </>
// ));

addParameters({
  options: {
    theme: csaa,
  },
});

configure(require.context('../src/lib/components', true, /\.stories\.js$/), module);
