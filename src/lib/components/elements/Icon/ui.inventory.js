import * as React from 'react';
import {
  UI, Page, Wrapper, Interview, Flag, Tag, Action, Block, ActionBlock, ActionButton, ActionLink, Icon, Group, Drawer, Title,
} from '@pixel/components';

const _ = require('lodash');
const __ = require('@pixel/utils/uis.js');

const config = function (...props) {
  return __.merge(...props);
};

const uis = {
  /*
      <UI.Icon svg="circle-full" />
  */
  def ({ svg, hugeness }) {
    return (
      <Icon
        id={config('circle-full', svg)}
        hugeness={config('s', hugeness)}
      />
    );
  },
  /*
      <UI.Icon id="auto"
        hugeness="l"
      />
  */
  auto ({ hugeness }) {
    return (
      <UI.Icon
        svg="core-auto"
        hugeness={config('s', hugeness)}
      />
    );
  },
  /*
      <UI.Icon id="auto_large"/>
  */
  auto_large () {
    return (
      <UI.Icon
        id="auto"
        hugeness="l"
      />
    );
  },
  /*
      <UI.Icon id="auto_medium"/>
  */
  auto_medium () {
    return (
      <UI.Icon
        id="auto"
        hugeness="m"
      />
    );
  },
  /*
      <UI.Icon id="auto_small"/>
  */
  auto_small () {
    return (
      <UI.Icon
        id="auto"
        hugeness="s"
      />
    );
  },
  /*
      <UI.Icon id="auto_xs"/>
  */
  auto_xs () {
    return (
      <UI.Icon
        id="auto"
        hugeness="xs"
      />
    );
  },
};

module.exports = uis;
