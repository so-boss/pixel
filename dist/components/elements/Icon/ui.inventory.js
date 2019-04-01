import React from 'react';
import { UI, Page, Wrapper, Interview, Flag, Tag, Action, Block, ActionBlock, ActionButton, ActionLink, Icon, Group, Drawer, Title } from '@pixel/components';

var _ = require('lodash');

var __ = require('@pixel/utils/uis.js');

var config = function config() {
  return __.merge.apply(__, arguments);
};

var uis = {
  /*
      <UI.Icon svg="circle-full" />
  */
  def: function def(_ref) {
    var svg = _ref.svg,
        hugeness = _ref.hugeness;
    return React.createElement(Icon, {
      id: config('circle-full', svg),
      hugeness: config('s', hugeness)
    });
  },

  /*
      <UI.Icon id="auto"
        hugeness="l"
      />
  */
  auto: function auto(_ref2) {
    var hugeness = _ref2.hugeness;
    return React.createElement(UI.Icon, {
      svg: "core-auto",
      hugeness: config('s', hugeness)
    });
  },

  /*
      <UI.Icon id="auto_large"/>
  */
  auto_large: function auto_large() {
    return React.createElement(UI.Icon, {
      id: "auto",
      hugeness: "l"
    });
  },

  /*
      <UI.Icon id="auto_medium"/>
  */
  auto_medium: function auto_medium() {
    return React.createElement(UI.Icon, {
      id: "auto",
      hugeness: "m"
    });
  },

  /*
      <UI.Icon id="auto_small"/>
  */
  auto_small: function auto_small() {
    return React.createElement(UI.Icon, {
      id: "auto",
      hugeness: "s"
    });
  },

  /*
      <UI.Icon id="auto_xs"/>
  */
  auto_xs: function auto_xs() {
    return React.createElement(UI.Icon, {
      id: "auto",
      hugeness: "xs"
    });
  }
};
module.exports = uis;