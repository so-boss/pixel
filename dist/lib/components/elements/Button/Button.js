import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import './Button.pcss';

export default class Button extends Component {
  renderButton () {
    const {
      children,
      type,
      ...rest
    } = this.props;

    return (
      <button
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  }

  render () {
    return this.renderButton();
  }
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
};
