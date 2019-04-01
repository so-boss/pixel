import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Action, Block, Drawer } from '@pixel/components/index';

function PreconfiguredAction ({
  id, drawer, indicatorProps, children, ...props
}) {
  return (
    <Action
      id={id}
      // type={drawer}
      indicatorProps={indicatorProps}
      drawer={drawer}
      {...props}
    >
      <Block
        indicatorProps={indicatorProps}
        {...props}
      />
      {children}
    </Action>
  );
}

export default class ActionBlock extends Component {
  renderChildren () {
    const {
      children,
    } = this.props;

    return React.Children.map(children, child => React.cloneElement(child, {

    }));
  }

  render () {
    const {
      id,
      children,
      indicator,
      drawer,
    } = this.props;

    const indicatorObj = {
      type: false,
      text: null,
      orientation: false,
    };

    // If indicator IS NOT ARROW
    if (indicator !== 'arrow') {
      // BECAUSE indicator is NOT specified
      if (!indicator) {
        // THEN indicator is hidden (default)
        indicatorObj.type = false;
      } else {
        // OTHERWISE indicator is TEXT LABEL
        indicatorObj.type = 'text';
        indicatorObj.text = indicator;
      }
    } else {
      // OTHERWISE indicator is an arrow
      // AND should be oriented right (def)
      indicatorObj.type = 'arrow';
      indicatorObj.orientation = 'right';
    }

    // If Drawer Exists becasue it's passed as a child
    //                  because it's set to 'expanded' or 'true' via the drawer prop (temp measure until state is added back in)
    if ((children && children.type.displayName === 'Drawer') || (drawer && (drawer === ('expanded' || 'true')))) {
      // THEN orient arrow down
      indicatorObj.orientation = 'down';

      return (
        <wrapper>
          <PreconfiguredAction
            // onActionBlockClick={this.handleActionBlockClick}
            id={id}
            // drawer={drawer}
            indicatorProps={indicatorObj}
            {...this.props}
          >
            {children}
          </PreconfiguredAction>
        </wrapper>
      );
    }

    return (
      <PreconfiguredAction
        id={id}
        indicatorProps={indicatorObj}
        {...this.props}
      >
        {children}
      </PreconfiguredAction>
    );
  }
}

ActionBlock.displayName = 'ActionBlock';
ActionBlock.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  indicator: PropTypes.string,
};

ActionBlock.defaultProps = {

};
