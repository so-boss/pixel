import React from "react";
import { Block, UI, Wrapper, Flag, Tag } from 'pixel';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'UI|Blocks',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};
export const newVehicle = () => (
  <div type="story">
    <div>
      <UI.Block
        id="twoLiner"
        lines={[
          'New Vehicle',
          'Replacing 2006 Honda Accord',
        ]}
      />
    </div>
  </div>
)
export const autoPolicy = () => (
  <div type="story">
    <div>
      <UI.Block
        id="threeLiner"
        lines={[
          'CAA9111929292',
          'Auto Policy',
          'Policy Period: 2018-2019',
        ]}
      />
    </div>
  </div>
)
export const autoPolicyPayment = () => (
  <div type="story">
    <div>
      <UI.Block
        id="fourLiner"
        lines={[
          'CAA9111929292',
          'Auto Policy',
          'Policy Period: 2018-2019',
          'A one-time payment was made in December 2018. Paid up through next year.',
        ]}
      />
    </div>
  </div>
)
