import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Drawer.pcss';

import { Container } from '../../';

// const Animate = Keyframes.Spring({
//   expand: {
//     to: {
//       marginTop:0,
//     },
//   },
//   collapse: {
//     to: {
//       marginTop: 0,
//     },
//     config:config.stiff,
//     onStart () {
//       this.to.marginTop = -this.store.$drawer.getBoundingClientRect().height;
//     },
//   },
// });


export default class Drawer extends Component {
  render () {
    const {
      children,
      drawer,
      tag,
      ...rest
    } = this.props;

    /*
      <Animate
        drawer={drawer}
        state={drawer.expanded === false
          ? 'collapse'
          : 'expand'
        }
        {...rest}
      >
        {styles => (
     */
    return (
      <Container
        tag={tag}
        drawer={drawer}
        {...rest}
      >
        {children}
      </Container>
    );
  }
}

Drawer.displayName = 'Drawer';

Drawer.defaultProps = {
  type: 'primary',
  tag: 'drawer',
};

Drawer.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
};
