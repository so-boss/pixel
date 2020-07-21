import React from "react";
import { UI} from '../../../components';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'UI|Bubbles/Flags',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};
export const variations = () => (
  <div type="story">
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
  </div>
);

export const docsUploaded = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Flag id="docs_uploaded"/>
      </layout>
    </div>
  </div>
);
export const latePayment = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Flag id="late_payment"/>
      </layout>
    </div>
  </div>
);
