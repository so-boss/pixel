import React from "react";
import {
  ActionBlock,
  Action,
  Block,
  UI,
  Wrapper,
  Flag,
  Tag,
  Inputs,
  InputSelect
} from 'pixel';
import {withKnobs, text} from "@storybook/addon-knobs";

import { Formik, Form } from 'formik';

import * as Yup from 'yup';

const validationSchema = Yup.object()
  .shape({
    name_first: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    name_last: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    name_full: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

//export const FormContext = React.createContext();

export default {
  title: 'UI|Input/Fields',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};

export const personsName = () => (
  <div type="story">
    <div>
      <Inputs
        id="names"
        initialValues={{
          name_first: '',
          name_last: '',
          name_middle: '',
          name_suffix: ''
        }}
        validationSchema={validationSchema}
      >
        <UI.Fields id="name_person"/>
      </Inputs>
    </div>
  </div>
);
export const address = () => (
  <div type="story">
    <div>
      <Inputs
        id="address"
        initialValues={{
          address_street: '',
          address_city: '',
          address_zip: '',
        }}
        validationSchema={validationSchema}
      >
        <UI.Fields id="address" />
      </Inputs>
    </div>
  </div>
);
export const lessor = () => (
  <div type="story">
    <div>
      <Inputs
        id="names"
        initialValues={{
          name: '',
          address_street: '',
          address_city: '',
          address_zip: '',
        }}
        validationSchema={validationSchema}
      >
        <UI.Fields id="lessor" />
      </Inputs>
    </div>
  </div>
);
export const financier = () => (
  <div type="story">
    <div>
      <Inputs
        id="names"
        initialValues={{
          name: '',
          address_street: '',
          address_city: '',
          address_zip: '',
        }}
        validationSchema={validationSchema}
      >
        <UI.Fields id="financier" />
      </Inputs>
    </div>
  </div>
);
