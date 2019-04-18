import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import './Inputs.pcss';

import { Formik, Form } from 'formik';

export const FormContext = React.createContext();

/*
    <Inputs
      id="names_form"
      initialValues={{
        name_first: '',
        name_last: '',
        name_full: '',
      }}
      validationSchema={validationSchema}
    >
      <UI.Field id="name_first"/>
      <UI.Field id="name_last" />
      <UI.Field id="name_full" />
    </Inputs>
*/
export default class Inputs extends Component {
  render () {
    const {
      id,
      children,
      initialValues,
      validationSchema,  // NOTE: More intutive to call scheme > RULES
    } = this.props;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        render={({ ...form }) => (
          <FormContext.Provider value={{ ...form }}>
            <Form
              id={id}
              autoComplete="off"
            >
              {children}
            </Form>
          </FormContext.Provider>
        )}
       />
    );
  }
}

Inputs.displayName = 'Inputs';
Inputs.propTypes = {

};

Inputs.defaultProps = {

};
