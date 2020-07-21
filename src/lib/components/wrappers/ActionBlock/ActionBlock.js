import React from 'react';
import PropTypes from 'prop-types';
import './ActionBlock.pcss';

import { Action, Block, Drawer } from '../../';
import { WrapperProvider, WrapperConsumer } from '../WrapperContext/WrapperContext.js'

const PreconfiguredAction = ({ id, drawer, expanded, state, indicatorProps, children, ...props }) => (
  <Action
    id={id}
    type={drawer}
    indicatorProps={indicatorProps}
    drawer={drawer}
    expanded={expanded}//{state.drawer.expanded}
    {...props}
  >
    <Block
      indicatorProps={indicatorProps}
      {...props}
    />
    {children}
  </Action>
);

export default class ActionBlock extends React.Component{
  //const [isDrawerEnabled, setDrawerEnabled] = useState(false);
  //const [isDrawerExpanded, setDrawerExpanded] = useState(false);

  // this.store = {
  //   $drawer:null,
  // };

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

  // const getDrawer = (o) => {
  //
  //   this.store.$drawer = o.$container;
  // }

  // function handleActionBlockClick(){
  //   //setDrawerEnabled(true)
  //   //setDrawerExpanded(currentExpandedState => !currentExpandedState)
  // }

  // function getState() {
  //   return {
  //     drawer:{
  //       enabled:isDrawerEnabled,
  //       expanded:isDrawerExpanded
  //     }
  //   }
  // }
  //
  // const activeState = {
  //   drawer:{
  //     enabled:isDrawerEnabled,
  //     expanded:isDrawerExpanded
  //   }
  // }

  render() {
    const renderChildren = ({ children }) => {
      // const {
      //   children,
      // } = this.props;

      const {
        drawer,
      } = this.state;

      return React.Children.map(children, child => React.cloneElement(child, {
        //drawer,
        onActionBlockClick: this.handleActionBlockClick,
        //getContainer:getDrawer()
        //store:this.store,
      }));
    }

    const {
      indicator,
      drawer,
      id,
      children,
      ...rest
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
    if ((children && children.type.displayName === 'Drawer') ||
      (drawer && (drawer === ('expanded' || 'true')))) {
      // THEN orient arrow down
      indicatorObj.orientation = 'down';

      return (
        //<WrapperProvider value={activeState}>
        <WrapperProvider>
          <wrapper>
            <PreconfiguredAction
              onActionBlockClick={this.handleActionBlockClick}
              id={id}
              drawer={drawer}
              indicatorProps={indicatorObj}
              //state={getState()}
              {...rest}
            >
              {children}
            </PreconfiguredAction>
          </wrapper>
        </WrapperProvider>
      );
    }

    return (
      //<WrapperProvider value={activeState}>
      <WrapperProvider>
        <PreconfiguredAction
          id={id}
          indicatorProps={indicatorObj}
          {...rest}
        >
          {children}
        </PreconfiguredAction>
      </WrapperProvider>
    );
  }
}

ActionBlock.displayName = 'ActionBlock';
