import React from "react";
import { ActionBlock, Action, Block, UI, Wrapper, Flag, Tag } from '../../../../../dist';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'UI|Bubbles/Tags',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};
export const variations = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Tag/>
      </layout>
    </div>
  </Wrapper>
);

export const vehicle = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Tag
          id="auto"
        />
      </layout>
    </div>
  </Wrapper>
);
export const vehicleDetailed = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Tag
          id="auto"
          label="2017 Camry SE"
        />
      </layout>
    </div>
  </Wrapper>
);
