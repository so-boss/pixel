import React from "react";
import { ActionBlock, Action, Block, UI, Wrapper, Flag, Tag } from '../../../../../dist';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'UI|Action/Links',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};
export const variations = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Action id="link"/>
      </layout>
    </div>
  </Wrapper>
);

export const cancel = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Action
          id="link"
          label="Cancel"
        />
      </layout>
    </div>
  </Wrapper>
);

export const submit = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Action
          id="link"
          label="Submit"
        />
      </layout>
    </div>
  </Wrapper>
);

export const save = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Action
          id="link"
          label="Save"
        />
      </layout>
    </div>
  </Wrapper>
);
export const back = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Action id="back_link"/>
      </layout>
    </div>
  </Wrapper>
);
export const next = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Action id="next_link"/>
      </layout>
    </div>
  </Wrapper>
);
export const navigation = () => (
  <Wrapper type="story">
    <div>
      <layout type="columns">
        <UI.Action id="interview_nav"/>
      </layout>
    </div>
  </Wrapper>
);
