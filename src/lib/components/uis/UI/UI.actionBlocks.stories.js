import React from "react";
import { ActionBlock, Action, Block, UI, Wrapper, Flag, Tag } from '../../../../../dist';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'UI|Action/Blocks',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};
export const driver = () => (
  <Wrapper type="story">
    <div>
      <UI.Action
        id="driver_block"
        driver="Emily Swamker"
        description="Named Insured"
      />
    </div>
  </Wrapper>
);
export const removingDriver = () => (
  <Wrapper type="story">
    <div>
      <UI.Action
        id="block"
        lines={[
          'Emily Swamker',
          'Removing driver from your policy.',
          false,
          'This element using the UI.Action id="block" syntax',
        ]}
      />
    </div>
  </Wrapper>
)

export const vehicle = () => (
  <Wrapper type="story">
    <div>
      <UI.Action
        id="vehicle_block"
        vehicle="2006 HONDA ACCORD"
        vin="KDIOPW29812934"
      />
    </div>
  </Wrapper>
);
