import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import 'antd/dist/antd.css';
import './Inputs.pcss';

//import { Formik, Form } from 'formik';
//import * as Yup from 'yup';
// const validationSchema = Yup.object()
//   .shape({
//     name_first: Yup.string()
//       .min(2, 'Too Short!')
//       .max(30, 'Too Long!')
//       .required('Required'),
//     name_last: Yup.string()
//       .min(2, 'Too Short!')
//       .max(30, 'Too Long!')
//       .required('Required'),
//     name_full: Yup.string()
//       .min(2, 'Too Short!')
//       .max(70, 'Too Long!')
//       .required('Required'),
//     email: Yup.string()
//       .email('Invalid email')
//       .required('Required'),
//   });
export const FormContext = React.createContext();

/*
    <Inputs
      id="names_form"
      initialValues={{
        name_first: '',
        name_last: '',
        name_full: '',
      }}
    >
      <UI.Field id="name_first"/>
      <UI.Field id="name_last" />
      <UI.Field id="name_full" />
    </Inputs>

    <Inputs
      layout="vertical"
      form={form}
      name="dynamic_rule"
    >
*/
export default class Inputs extends Component {
  render () {
    const {
      id,
      name,
      form,
      formSize,
      layout,
      children,
      ...rest
    } = this.props;

    return (
      <Form
        name={name||id}
        layout={layout||"vertical"}
        form={form}
        size={formSize||"large"}
        autoComplete="off"
        {...rest}
      >
        {children}
      </Form>
    );
  }
}

/*
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

 */
Inputs.displayName = 'Inputs';
Inputs.propTypes = {

};

Inputs.defaultProps = {

};
