import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ActionBlock.pcss';

import { Action, Block, Drawer, WrapperContext } from '../../';

function PreconfiguredAction ({
  id, drawer, state, indicatorProps, children, ...props
}) {
  return (
    <Action
      id={id}
      // type={drawer}
      indicatorProps={indicatorProps}
      drawer={drawer}
      expanded={state.drawer.expanded}
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
  // vvvvvv
  constructor (props) {
    super(props);
    this.handleActionBlockClick = this.handleActionBlockClick.bind(this);
    this.getDrawer = this.getDrawer.bind(this);

    this.store = {
      $drawer:null,
    };

    this.state = {
      drawer: {
        enabled:false,
        expanded:false,
      },
    };
  }

  componentDidMount () {
    const {
      drawer,
      children,
    } = this.props;

    // If Drawer Exists becasue it's passed as a child
    if (children && children.type.displayName === 'Drawer') {
      this.setState({
        drawer:{
          enabled:true,
          expanded:true,
        },
      });
    }
  }

  getDrawer (o) {
    this.store.$drawer = o.$container;
  }

  handleActionBlockClick (e) {
    this.setState(prevState => ({
      drawer: {
        enabled:true,
        expanded:!prevState.drawer.expanded,
      },
    }));
  }

  // ^^^^^^^
  renderChildren () {
    const {
      children,
    } = this.props;

    const {
      drawer,
    } = this.state;

    return React.Children.map(children, child => React.cloneElement(child, {
      drawer,
      onActionBlockClick:this.handleActionBlockClick,
      getContainer:this.getDrawer,
      store:this.store,
    }));
  }

  render () {
    const {
      id,
      children,
      indicator,
      drawer,
    } = this.props;

    // const {
    //   drawer,
    // } = this.state;

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
        <WrapperContext.Provider value={this.state}>
          <wrapper>
            <PreconfiguredAction
              onActionBlockClick={this.handleActionBlockClick}
              id={id}
              drawer={drawer}
              indicatorProps={indicatorObj}
              state={this.state}
              {...this.props}
            >
              {children}
            </PreconfiguredAction>
          </wrapper>
        </WrapperContext.Provider>
      );
    }

    return (
      <WrapperContext.Provider value={this.state}>
        <PreconfiguredAction
          id={id}
          indicatorProps={indicatorObj}
          {...this.props}
        >
          {children}
        </PreconfiguredAction>
      </WrapperContext.Provider>
    );
  }
}

ActionBlock.displayName = 'ActionBlock';
ActionBlock.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  indicator: PropTypes.any,
};

ActionBlock.defaultProps = {

};
