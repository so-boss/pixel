import React from "react";
import { Block, UI, Wrapper, Flag, Tag } from '../../../../../dist';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'UI|Blocks',
  //addDecorator:withKnobs,
  parameters: {
    component: UI,
  },
};
export const newVehicle = () => (
  <Wrapper type="story">
    <div>
      <UI.Block
        id="twoLiner"
        lines={[
          'New Vehicle',
          'Replacing 2006 Honda Accord',
        ]}
      />
    </div>
  </Wrapper>
)
export const autoPolicy = () => (
  <Wrapper type="story">
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
  </Wrapper>
)
export const autoPolicyPayment = () => (
  <Wrapper type="story">
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
  </Wrapper>
)
