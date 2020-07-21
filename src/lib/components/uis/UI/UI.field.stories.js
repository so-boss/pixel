import React from "react";
import { ActionBlock, Action, Block, UI, Wrapper, Flag, Tag, Inputs, InputSelect } from '../../../components';//'../../../components';
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
  title: 'UI|Input/Field',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};

export const firstName = () => (
  <div type="story">
    <div>
      <Inputs
        id="firstName"
        initialValues={{
          name_first: ''
        }}
        validationSchema={validationSchema}
      >
        <UI.Field id="name_first" />
      </Inputs>
    </div>
  </div>
);
export const middleName = () => (
  <div type="story">
    <div>
      <Inputs
        id="middleName"
        initialValues={{
          name_middle: ''
        }}
        validationSchema={validationSchema}
      >
        <UI.Field id="name_middle" />
      </Inputs>
    </div>
  </div>
);
export const lastName = () => (
  <div type="story">
    <div>
      <Inputs
        id="lastName"
        initialValues={{
          name_last: ''
        }}
        validationSchema={validationSchema}
      >
        <UI.Field id="name_last" />
      </Inputs>
    </div>
  </div>
);
export const fullName = () => (
  <div type="story">
    <div>
      <Inputs
        id="fullName"
        initialValues={{
          name: ''
        }}
        validationSchema={validationSchema}
      >
        <UI.Field id="name_full" />
      </Inputs>
    </div>
  </div>
);
export const suffix = () => (
  <div type="story">
    <div>
      <Inputs
        id="suffix"
        initialValues={{
          name_suffix: ''
        }}
        validationSchema={validationSchema}
      >
        <UI.Field id="name_suffix" />
      </Inputs>
    </div>
  </div>
);
export const businessName = () => (
  <div type="story">
    <div>
      <Inputs
        id="institutionName"
        initialValues={{
          name: ''
        }}
        validationSchema={validationSchema}
      >
        <UI.Field
          id="name"
          label="Name of Lessor"
        />

        <UI.Field
          id="name"
          label="Name of Financier"
          mask="ACME Holdings"
        />
      </Inputs>
    </div>
  </div>
);
export const email = () => (
  <div type="story">
    <div>
      <Inputs
        id="names"
        initialValues={{
          email: '',
        }}
        validationSchema={validationSchema}
      >
        <UI.Field id="email" />
      </Inputs>
    </div>
  </div>
);
