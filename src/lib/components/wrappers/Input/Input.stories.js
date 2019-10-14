import React from "react";
import { ActionBlock, Action, Block, UI, Wrapper, Flag, Tag,Input, Inputs, InputSelect } from 'pixel';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

import { Formik, Form } from 'formik';

import * as Yup from 'yup';

const zip = new RegExp("[0-9]{5}(-[0-9]{4})?");
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
    address_zip: Yup.string()
      .matches(zip, "Bad zip")
  });

//export const FormContext = React.createContext();

export default {
  title: 'Wrappers|Input',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};

export const Text = () => (
  <div type="story">
    <div>
      <Inputs
        id="names"
        initialValues={{
          name_full: ''
        }}
        validationSchema={validationSchema}
      >
        <Input
          type="text"
          name="name_full"
          label="full name"
        />
      </Inputs>
    </div>
  </div>
);
export const masking = () => (
  <div type="story">
    <div>
      <Inputs
        id="names"
        initialValues={{
          address_zip: '',
          email:''
        }}
        validationSchema={validationSchema}
      >
        <Input
          name="address_zip"
          mask="00000"
          label="Zip Code"
          spacing="natural"
        />
        <Input
          name="email"
          mask="email@domain.com"
          label="email"
        />
      </Inputs>
    </div>
  </div>
);

