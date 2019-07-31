import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Page.pcss';

import { Container } from '../../';

export default class Page extends Component {
  render () {
    const {
      children,
      tag,
      slots,
      ...rest
    } = this.props;

    return (
      <Container
        tag={tag}
        slots={slots}
        {...rest}
      >
        {children}
      </Container>
    );
  }
}

Page.defaultProps = {
  tag: 'page',
  slots: {
    footer: {
      include: true,
    },
  },
};

Page.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  slots: PropTypes.object,
};
