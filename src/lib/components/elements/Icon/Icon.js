import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import './Icon.pcss';
//import Icons from './sprite.svg';

export default class Icon extends Component {
  render () {
    const {
      id,
      hugeness,
    } = this.props;

    /*
      <Icon id='core-auto' hugeness='xs' />
   */
    return (
      <svg className={`icon pixel-${id}`} hugeness={hugeness}>
        <use xlinkHref={`${Icons}#pixel-${id}`} />
      </svg>
    );
  }
}

// Icon.UIs = require('@pixel/components/elements/Icon/ui.js')
Icon.displayName = 'Icon';
Icon.propTypes = {
  id: PropTypes.string,
};

Icon.defaultProps = {
  // drawer: 'false'
};
