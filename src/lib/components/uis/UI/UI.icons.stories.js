import React from "react";
import { ActionBlock, Action, Block, UI, Wrapper, Flag, Tag } from '../../../../../dist';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'UI|Icons',
  //addDecorator:withKnobs,
  // parameters: {
  //   component: UI,
  // },
};
export const auto = () => (
  <Wrapper type="story">
    <div>
      <layout>
        <UI.Icon id="auto"/>
        <UI.Icon id="auto" hugeness="l"/>
        <UI.Icon id="auto_xs"/>
        <UI.Icon id="auto_small"/>
        <UI.Icon id="auto_medium"/>
        <UI.Icon id="auto_large"/>
      </layout>
    </div>
  </Wrapper>
);
