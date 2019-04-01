import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from '@pixel/components';
import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: '0px'
  }),
  placeholder: (provided, state) => ({
    ...provided,
    marginLeft: '0px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      // ...provided,
      opacity,
      transition,
      // bottom:'5px',
      top: 'unset',
      marginLeft: '0px'
    };
  }
};

export default class InputSelect extends Component {
  constructor (props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      inputValue: this.props.inputValue,
    };
  }
  /*
      console.log(inputValue.value, action);
  */
  onInputChange (inputValue, { action }) {
    const methods = {
      'input-change': function () {
        this.setState({ inputValue });
      },
      'menu-close': function () {
        let menuIsOpen;
        if (inputValue) {
          menuIsOpen = true;
        }
        this.setState({
          menuIsOpen
        });
      },
      def () {}
    };

    let method = methods[action];
    if (!method) {
      method = methods.def;
    }
    return method.apply(this);
  }
  render () {
    const { inputValue, menuIsOpen } = this.state;
    const { children } = this.props;

    return (
      <Wrapper type="select_input">
        <Select
          className="px-select"
          classNamePrefix="px"
          options={children.options}
          // Note:Have open for debugging
          defaultValue={children.options[2]}
          inputValue={inputValue}
          menuIsOpen={menuIsOpen}
          onChange={this.onInputChange}
        />
      </Wrapper>
    );
  }
}

InputSelect.displayName = 'InputSelect';
InputSelect.propTypes = {
  // name: PropTypes.string,
};

InputSelect.defaultProps = {

};
