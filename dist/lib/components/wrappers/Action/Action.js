import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import './Action.pcss';

export default class Action extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    this.props.onActionBlockClick(e); // eslint-disable-line
  }

  render () {
    const {
      id,
      type,
      children,
      indicatorProps,
      theme,
      drawer,
    } = this.props;

    // TODO: Accomplish the ternary opt on drawer prop
    // without the following default object approach
    // on the next line the
    const drawerObj = (drawer || { enabled: false, expanded: false });
    return (
      <action
        id={id}
        drawer={drawer}// {drawerObj.enabled === true && (drawerObj.expanded === false ? 'collapsed' : 'expanded')}
        indicator={indicatorProps && indicatorProps.type}
        type={type}
        theme={theme}
        {...this.rest}
      >
        {children}
      </action>
    );
  }
}

Action.displayName = 'Action';
Action.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  indicatorProps: PropTypes.object,
  drawer: PropTypes.string,
};

Action.defaultProps = {
  // drawer: {
  //   enabled:false,
  //   expanded:true,
  // },
};
