import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ActionLink.pcss';

import { Action, Thing } from '../../';

export default class ActionLink extends Component {
  render () {
    const {
      id,
      children,
      ...props
    } = this.props;

    return (
      <Action
        id={id}
        type="link"
        {...props}
      >
        <Thing>
          {children}
        </Thing>
      </Action>
    );
  }
}

ActionLink.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
};

ActionLink.defaultProps = {

};
