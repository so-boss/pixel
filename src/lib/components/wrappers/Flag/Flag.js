import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Block } from '@pixel/components';

export default class Flag extends Component {
  render () {
    const {
      children,
      theme,
      ...rest
    } = this.props;

    return (
      <flag
        theme={theme}
        {...rest}
      >
        <Block
          lines={[
            children,
          ]}
        />
      </flag>
    );
  }
}

Flag.defaultProps = {
  theme: 'grey',
};

Flag.propTypes = {
  theme: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.array,
};
