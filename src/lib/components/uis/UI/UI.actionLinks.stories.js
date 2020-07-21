import React from "react";
import { ActionBlock, Action, Block, UI, Wrapper, Flag, Tag } from '../../../components';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'UI|Action/Links',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};
export const variations = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Action id="link"/>
      </layout>
    </div>
  </div>
);

export const cancel = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Action
          id="link"
          label="Cancel"
        />
      </layout>
    </div>
  </div>
);

export const submit = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Action
          id="link"
          label="Submit"
        />
      </layout>
    </div>
  </div>
);

export const save = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Action
          id="link"
          label="Save"
        />
      </layout>
    </div>
  </div>
);
export const back = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Action id="back_link"/>
      </layout>
    </div>
  </div>
);
export const next = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Action id="next_link"/>
      </layout>
    </div>
  </div>
);
export const navigation = () => (
  <div type="story">
    <div>
      <layout type="columns">
        <UI.Action id="interview_nav"/>
      </layout>
    </div>
  </div>
);
