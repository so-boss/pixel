import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Group } from '@pixel/components';

const Step = ({
  index, groupType, children, step,
}) => (
  <Group
    step={index}
    active={step === index ? 'true' : 'false'}
    type={groupType}
  >
    {children}
  </Group>
);

export default class Interview extends Component {
  constructor (props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.state = {
      step: 0,
    };
  }

  componentDidMount () {
    this.setState({
      step: 0,
    });
  }

  handleChange (e) {
    const {
      props,
    } = this;
    props.onStepChange();
  }

  next () {
    this.setState((prevState, props) => ({
      step: prevState.step + 1,
    }));
  }

  prev () {
    this.setState((prevState, props) => ({
      step: prevState.step - 1,
    }));
  }

  render () {
    const {
      children,
      type,
      groupType,
      steps,
      ...rest
    } = this.props;

    const {
      state,
    } = this;

    return (
      <Wrapper
        type={type}
        step={state.step}
        {...rest}
      >
        <Wrapper
          style={{
            width: `${children.length * 100}%`,
          }}
        >
          {children.map((child, index) => (
            <Group
              step={index}
              active={index === 0 && 'true'}
              style={{
                width: `calc(100% /${children.length})`,
              }}
              type={groupType}
            >
              {child}
            </Group>
          ))}
        </Wrapper>
      </Wrapper>
    );
  }
}

Interview.defaultProps = {
  type: 'interview',
  groupType: 'question',
};

Interview.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  groupType: PropTypes.string,
};
