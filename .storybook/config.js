import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';

import { GlobalStyle } from '../src/storybook/components/shared/global';
import csaa from './csaa';

import "../src/storybook/styles.css";
import "../dist/module.css";

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addParameters({
  options: {
    theme: csaa,
  },
});

configure(require.context('../src/lib/components', true, /\.stories\.(js|mdx)$/), module);
