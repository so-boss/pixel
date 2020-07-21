import React from 'react';
import { Block, Wrapper, Drawer, Interview, UI, Flag, Tag, Action, ActionButton } from '../../../components';

export default {
  title: 'Wrappers|Action/Button',

  parameters: {
    component: ActionButton,
  },
};

export const ac1 = () => {
  return (
    <div type="story">
      <div>
        <layout type="sidebyside">
          <ActionButton>No</ActionButton>
          <ActionButton>Yes</ActionButton>
          <ActionButton>Assign Driver</ActionButton>
          <ActionButton>Remove Vehicle</ActionButton>
        </layout>
      </div>
    </div>
  )
};
ac1.story = {
  name: 'Primary'
};

export const ac2 = () => {
  return (
    <div type="story">
      <div>
        <layout type="sidebyside">
          <ActionButton theme="secondary">No</ActionButton>
          <ActionButton theme="secondary">Yes</ActionButton>
          <ActionButton theme="secondary">Assign Driver</ActionButton>
          <ActionButton theme="secondary">Remove Vehicle</ActionButton>
        </layout>
      </div>
    </div>
  )
};

ac2.story = {
  name: 'Secondary'
};

export const ac3 = () => {
  return (
    <div type="story">
      <div>
        <layout type="sidebyside">
          <ActionButton disable="true">No</ActionButton>
          <ActionButton disable="true">Yes</ActionButton>
          <ActionButton disable="true">Assign Driver</ActionButton>
          <ActionButton disable="true">Remove Vehicle</ActionButton>
        </layout>
      </div>
    </div>
  )
};

ac3.story = {
  name: 'Disabled'
};
