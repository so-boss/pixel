import React, { Component } from 'react';
import PropTypes from 'prop-types';

const _ = require('lodash');
const uis = require('@pixel/components/uis/inventory.js');

const definedUI = function (id, element, props) {
  // this.displayName = 'UI';
  let packageID = id;
  if (!id) {
    packageID = 'def';
  }

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
