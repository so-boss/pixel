import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Block.pcss';

import {
  Wrapper, Action, Thing, Icon, Flag, Tag,
} from '../../';

const _ = require('lodash');

function Line ({ children }) {
  return (
    <Thing>
      {children}
    </Thing>
  );
}


function Arrow ({ type }) {
  const arrows = {
    right: 'core-arrow-right',
    down: 'core-arrow-down',
  };
  return (
    <Icon id={arrows[type]} />
  );
}

function ActionLabel ({ children }) {
  return (
    <Action type="label">
      <Thing>{children}</Thing>
    </Action>
  );
}

/*
    <Column hugeness='m'>
      <Icon />
    </Column>
 */
function Column ({ children, ...rest }) {
  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  );
}

/*
    <Col1 icon={{
      id:'oneui-core-auto',
      size:'s',
    }} />
 */
const ColumnOne = ({ icon }) => (
  <Column hugeness={icon.id && icon.size}>
    {icon.id
      && <Icon id={icon.id} />
    }
  </Column>
);

/*
    <Col2 lines={[
        'CAAS100383547',
        'Policy Period 12/31/2018 to 12/31/2019',
        false,
        'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
      ]}
    />
 */
const ColumnTwo = ({ lines }) => (
  <Column>
    {lines.map(line => (
      <Line>
        {
          line && (
            _.isArray(line)
              ? line.map(listLine => listLine.element === 'flag'
                ? <Flag theme={listLine.theme}>{listLine.label}</Flag>// React.createElement('Flag', null, 'test')//CustomTag(listLine)
                : <Tag icon={listLine.icon}>{listLine.label}</Tag>,
              )
              : line
          )
        }
      </Line>
    ))}
  </Column>
);

const ColumnThree = ({ children, indicator }) => (
  <Column>
    {
      indicator && (
        indicator.text
          ? <ActionLabel>{indicator.text}</ActionLabel>
          : <Arrow type={indicator.orientation} />
      )
    }
    {children}
  </Column>
);

export default class Block extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.stopPropagation();
    this.props.onActionBlockClick(e); // eslint-disable-line
  }

  render () {
    const {
      icon,
      lines,
      flag,
      indicatorProps,
      onActionBlockClick,
    } = this.props;

    return (
      <block
        onClick={onActionBlockClick && this.handleClick}
      >
        <Wrapper>
          <ColumnOne icon={icon} />
          <ColumnTwo lines={lines} />
          <ColumnThree indicator={indicatorProps}>
            {flag && <Flag theme={flag.theme}>{flag.label}</Flag>}
          </ColumnThree>
        </Wrapper>
      </block>
    );
  }
}

Block.displayName = 'Block';

Block.defaultProps = {
  icon: {
    id: false,
  },
};

Block.propTypes = {
  icon: PropTypes.object,
  lines: PropTypes.array,
  indicatorProps: PropTypes.object,
};
