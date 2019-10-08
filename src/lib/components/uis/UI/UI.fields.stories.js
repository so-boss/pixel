import React from "react";
import { ActionBlock, Action, Block, UI, Wrapper, Flag, Tag, Inputs, InputSelect } from '../../../../../dist';//'../../../components';
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
  <Wrapper type="story">
    <div>
      <Inputs
        id="names"
        initialValues={{
          name_first: '',
          name_last: '',
          name_middle: '',
          name_suffix: '',
          name: '',
          email: '',
          address_street: '',
          address_city: '',
          address_zip: '',
          color:['']
        }}
        validationSchema={validationSchema}
      >
        <UI.Fields id="name_person"/>
      </Inputs>
    </div>
  </Wrapper>
);

export const lessor = () => (
  <Wrapper type="story">
    <div>
      <Inputs
        id="names"
        initialValues={{
          name_first: '',
          name_last: '',
          name_middle: '',
          name_suffix: '',
          name: '',
          email: '',
          address_street: '',
          address_city: '',
          address_zip: '',
          color:['']
        }}
        validationSchema={validationSchema}
      >
        <UI.Fields id="lessor" />
      </Inputs>
    </div>
  </Wrapper>
);
export const financier = () => (
  <Wrapper type="story">
    <div>
      <Inputs
        id="names"
        initialValues={{
          name_first: '',
          name_last: '',
          name_middle: '',
          name_suffix: '',
          name: '',
          email: '',
          address_street: '',
          address_city: '',
          address_zip: '',
          color:['']
        }}
        validationSchema={validationSchema}
      >
        <UI.Fields id="financier" />
      </Inputs>
    </div>
  </Wrapper>
);
