import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Interview.pcss';

import { Wrapper, Group } from '../../';

const Step = ({ index, groupType, children, step, }) => (
  <Group
    step={index}
    active={step === index ? 'true' : 'false'}
    type={groupType}
  >
    {children}
  </Group>
);

export default function Interview({children, type, groupType, steps, ...rest}){
  const [interviewStep, setInterviewStep] = useState(0);
  /*
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

   */

    function handleChange (e) {
      const {
        props,
      } = this;
      this.props.onStepChange();
    }

    function next () {
      setInterviewStep(prevInterviewStep => prevInterviewStep + 1)
    }

    function prev () {
      setInterviewStep(prevInterviewStep => prevInterviewStep - 1)
    }

    const {
      state,
    } = this;

    return (
      <Wrapper
        type={type}
        step={interviewStep}
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
