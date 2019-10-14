import React from "react";
import { ActionBlock, Action, Block, UI, Wrapper, Flag, Tag, Inputs, InputSelect } from 'pixel';//'../../../components';
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
  title: 'UI|Interviews',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};

export const ageLicensed = () => (
  <div type="story">
    <div>
      <Action drawer="expanded">
        <UI.Drawer id="interview">
          <UI.Question
            id="age_licensed"
            driver="William"
          />
        </UI.Drawer>
      </Action>
    </div>
  </div>
);

export const gender = () => (
  <div type="story">
    <div>
      <Action drawer="expanded">
        <UI.Drawer id="interview">
          <UI.Question
            id="gender"
            driver="William"
          />
        </UI.Drawer>
      </Action>
    </div>
  </div>
);

export const relationship = () => (
  <div type="story">
    <div>
      <Action drawer="expanded">
        <UI.Drawer id="interview">
          <UI.Question
            id="relationship_to"
            driver="William"
            driver2="Amanda"
          />
        </UI.Drawer>
      </Action>
    </div>
  </div>
);

export const maritalStatus = () => (
  <div type="story">
    <div>
      <Action drawer="expanded">
        <UI.Drawer id="interview">
          <UI.Question
            id="marital_status"
            driver="William"
          />
        </UI.Drawer>
      </Action>
    </div>
  </div>
);

export const modifyingMore = () => (
  <div type="story">
    <div>
      <Action drawer="expanded">
        <UI.Drawer id="interview">
          <UI.Question id="modifying_more"/>
        </UI.Drawer>
      </Action>
    </div>
  </div>
);

export const removeDriverReason = () => (
  <div type="story">
    <div>
      <ActionBlock
        lines={[
          'Emily Swanker',
          'Removing driver from your policy',
        ]}
        drawer="expanded"
      >
        <UI.Drawer id="interview">
          <UI.Question
            id="remove_driver_reason"
            driver="Emily"
          />
        </UI.Drawer>
      </ActionBlock>
      <spacer />
      <UI.Action
        id="driver_block"
        driver="Emily Swamker"
        description="Named Insured"
        drawer="expanded"
      >
        <UI.Drawer id="interview">
          <UI.Question
            id="remove_driver_reason"
            driver="Emily"
          />
        </UI.Drawer>
      </UI.Action>
    </div>
  </div>
);

export const removeVehicleReason = () => (
  <div type="story">
    <div>
      <UI.Action
        id="vehicle_block"
        vehicle="2006 HONDA ACCORD"
        vin="KDIOPW29812934"
        drawer="expanded"
      >
        <UI.Drawer id="interview">
          <UI.Question
            id="remove_driver_reason"
            driver="Emily"
          />
        </UI.Drawer>
      </UI.Action>
    </div>
  </div>
);

export const stateLicensed = () => (
  <div type="story">
    <div>
      <ActionBlock
        lines={[
          'William Jones',
          'Tell us about this driver',
        ]}
        drawer="expanded"
      >
        <UI.Drawer id="interview">
          <UI.Question
            id="state_licensed"
            driver="William"
          />
        </UI.Drawer>
      </ActionBlock>
    </div>
  </div>
);

export const licenseNumber = () => (
  <div type="story">
    <div>
      <Action drawer="expanded">
        <UI.Drawer id="interview">
          <UI.Question
            id="license_number"
            driver="William"
          />
        </UI.Drawer>
      </Action>
    </div>
  </div>
);
