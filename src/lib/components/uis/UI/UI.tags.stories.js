import React from "react";
import { UI } from '../../../components';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'UI|Bubbles/Tags',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};
export const variations = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Tag/>
      </layout>
    </div>
  </div>
);

export const vehicle = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Tag
          id="auto"
        />
      </layout>
    </div>
  </div>
);
export const vehicleDetailed = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Tag
          id="auto"
          label="2017 Camry SE"
        />
      </layout>
    </div>
  </div>
);
