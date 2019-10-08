import React from "react";
import { ActionBlock, Action, Block, UI, Wrapper, Flag, Tag, Inputs } from '../../../../../dist';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'UI|Interviews',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};

export const ageLicensed = () => (
  <Wrapper type="story">
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
  </Wrapper>
);

export const gender = () => (
  <Wrapper type="story">
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
  </Wrapper>
);

export const relationship = () => (
  <Wrapper type="story">
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
  </Wrapper>
);

export const maritalStatus = () => (
  <Wrapper type="story">
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
  </Wrapper>
);

export const modifyingMore = () => (
  <Wrapper type="story">
    <div>
      <Action drawer="expanded">
        <UI.Drawer id="interview">
          <UI.Question id="modifying_more"/>
        </UI.Drawer>
      </Action>
    </div>
  </Wrapper>
);

export const removeDriverReason = () => (
  <Wrapper type="story">
    <div>
      <UI.Question
        id="remove_driver_reason"
        driver="Emily"
      />
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
  </Wrapper>
);

export const removeVehicleReason = () => (
  <Wrapper type="story">
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
  </Wrapper>
);

export const stateLicensed = () => (
  <Wrapper type="story">
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
  </Wrapper>
);

export const licenseNumber = () => (
  <Wrapper type="story">
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
  </Wrapper>
);
