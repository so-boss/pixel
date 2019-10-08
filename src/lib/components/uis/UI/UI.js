import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UI.pcss';
import * as inventory from '../../uis/inventory.js';

const _ = require('lodash');
//const uis = require('../../uis/inventory.js');

const uis = inventory.uis;

const definedUI = function (id, element, props) {
  // this.displayName = 'UI';
  let packageID = id;
  if (!id) {
    packageID = 'def';
  }

  console.log(uis, element, packageID)
  return (uis[element][packageID].apply(this, [props]));
};

export default class UI extends Component {
  render () {
    const {
      element,
      id,
      ...rest
    } = this.props;

    return definedUI(id, element, this.props);
  }
}

_.forIn(uis, (obj, element) => {
  UI[_.capitalize(element)] = function (props) {
    const {
      id,
      ...rest
    } = props;

    return definedUI(id, element, props);
  };
});

UI.displayName = 'UI';

UI.defaultProps = {

};

UI.propTypes = {
  element: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.array,
};
