import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ActionButton.pcss';
import { Action, Button } from '../../';

export default class ActionButton extends Component {
  render () {
    const {
      id,
      children,
      disable,
      type,
      ...props
    } = this.props;

    return (
      <Action
        id={id}
        type={type}
        disable
        {...props}
      >
        <Button
          disable={disable}
        >
          {children}
        </Button>
      </Action>
    );
  }
}

ActionButton.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  theme: PropTypes.string,
  type: PropTypes.string,
};

ActionButton.defaultProps = {
  theme: 'primary',
  type: 'button',
};
