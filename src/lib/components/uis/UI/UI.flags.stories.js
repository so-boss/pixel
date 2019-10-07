import React from "react";
import { ActionBlock, Action, Block, UI, Wrapper, Flag, Tag } from '../../../../../dist';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'UI|Bubbles/Flags',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};
export const variations = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Flag/>
        <UI.Flag
          label="Override Flag Label & Theme"
          theme="grey"
        />
        <UI.Flag id="active"/>
        <UI.Flag
          id="active"
          theme="r2d2"
        />
      </layout>
    </div>
  </Wrapper>
);

export const docsUploaded = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Flag id="docs_uploaded"/>
      </layout>
    </div>
  </Wrapper>
);
export const latePayment = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Flag id="late_payment"/>
      </layout>
    </div>
  </Wrapper>
);
