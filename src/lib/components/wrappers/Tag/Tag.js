import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import './Tag.pcss';

import { Block } from '@pixel/components';

/*
    <Tag
      icon="oneui-core-auto"
    >
      2017 Toyota Camry SE
    </Tag>
 */
export default class Tag extends Component {
  render () {
    const {
      children,
      theme,
      icon,
      ...rest
    } = this.props;

    /*
        NOTE: Only {theme} defined in css is grey
        (only paramaterized for extra flexability)
        I.E in Tag.pcss > @mixin theme grey;
    */
    return (
      <tag
        theme={theme}
        {...rest}
      >
        <Block
          icon={icon && {
            id: icon,
            size: 'xs',
          }}
          lines={[
            children,
          ]}
        />
      </tag>
    );
  }
}

Tag.defaultProps = {
  theme: 'grey',
};

Tag.propTypes = {
  theme: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.array,
};
