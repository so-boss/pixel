import React, { useState, useEffect } from 'react';
import { Field, UI, Wrapper, Inputs, InputSelect } from '../../../components';//'../../../components';
import { Form, Input, Button, Checkbox  } from 'antd';
import 'antd/dist/antd.css';

import {withKnobs, text} from "@storybook/addon-knobs";

//import { Formik, Form } from 'formik';
//import * as Yup from 'yup';

// const zip = new RegExp("[0-9]{5}(-[0-9]{4})?");
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
//     address_zip: Yup.string()
//       .matches(zip, "Bad zip")
//   });

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
      <Input
        placeholder="Full Name"
        size="large"
        addonBefore="Full Name"
        id="name_full"
      />
    </div>
  </div>
);

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};
export const masking = () => {
  const [form] = Form.useForm();
  const [checkFirst, setCheckFirst] = useState(false);
  useEffect(() => {
    form.validateFields(['first_name']);
  }, [checkFirst]);

  const onCheckboxChange = e => {
    setCheckFirst(e.target.checked);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  return (
    <div type="story">
      <div>
        <Inputs
          form={form}
          name="name_demo"
        >
          <UI.Field
            id="name_full"
            rules={[
              {
                required: true,
                message: 'Please input your full name',
              },
            ]}/>
          <UI.Field id="name_first" />
          <UI.Field
            id="name_last"
            rules={[
              {
                required: checkFirst,
                message: 'Please input your first name',
              },
            ]}
          />
          <Form.Item {...formTailLayout}>
            <Checkbox checked={checkFirst} onChange={onCheckboxChange}>
              Nickname is required
            </Checkbox>
          </Form.Item>
          <Form.Item {...formTailLayout}>
            <Button type="primary" onClick={onCheck}>
              Check
            </Button>
          </Form.Item>
        </Inputs>
      </div>
    </div>
  );
};

/*
      <Inputs
        id="names"
        initialValues={{
          name_full: ''
        }}
        validationSchema={validationSchema}
      >
        <Field
          type="text"
          name="name_full"
          label="full name"
        />
      </Inputs>

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

 */
