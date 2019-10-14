import React from 'react';
import { Block, Wrapper, Drawer, Interview, UI, Flag, Tag, Action, ActionBlock } from 'pixel';

export default {
  title: 'Wrappers|Action/Block',

  // parameters: {
  //   component: ActionBlock,
  // },
};

export const ab1 = () => {
  return (
    <div type="story">
      <div>
        <ActionBlock
          id="addDriver"
          lines={[
            'CAAS100383547',
            'w/ Drawer Prop (expanded)',
          ]}
        />
        <ActionBlock
          id="addDriver"
          lines={[
            'CAAS100383547',
            'No Drawer Prop or Arrow',
            'Policy Period 12/31/2018 to 12/31/2019',
          ]}
        />
        <ActionBlock
          id="addDriver"
          lines={[
            'CAAS100383547',
            'LINE 2: No Drawer or Arrow',
            false,
            'LINE 4: Policy Period 12/31/2018 to 12/31/2019',
          ]}
        />
      </div>
    </div>
  )
};
ab1.story = {
  name: 'Multiple Lines'
};

export const ab2 = () => {
  return (
    <div type="story">
      <div>
        <ActionBlock
          id="addDriver"
          lines={[
            'CAAS100383547',
            'No Drawer + Arrow pointing Right',
            'LINE 3: Policy Period 12/31/2018 to 12/31/2019',
          ]}
          indicator="arrow"
        />
      </div>
    </div>
  )
};
ab2.story = {
  name: 'Arrow Icon (rt align)'
};

export const ab3 = () => {
  return (
    <div type="story">
      <div>
        <ActionBlock
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          id="addDriver"
          lines={[
            'CAAS100383547',
            'w/ Drawer Prop (expanded) & arrow replaced by label "CANCEL"',
            'Policy Period 12/31/2018 to 12/31/2019',
          ]}
          indicator="cancel"
        />
      </div>
    </div>
  )
};
ab3.story = {
  name: 'Action Label (rt align)'
};

export const ab4 = () => {
  return (
    <div type="story">
      <div>
        <ActionBlock
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
          ]}
        />
        <ActionBlock
          icon={{
            id: 'core-auto',
            size: 'l',
          }}
          lines={[
            'CAAS100383547',
            'w/ Drawer Prop (collapsed)',
          ]}
        />
        <ActionBlock
          icon={{
            id: 'core-auto',
            size: 'l',
          }}
          id="addDriver"
          lines={[
            'CAAS100383547',
            'No Drawer + Arrow pointing Right',
            'LINE 3: Policy Period 12/31/2018 to 12/31/2019',
            'LINE 4: Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
          ]}
          indicator="arrow"
        />
      </div>
    </div>
  )
};

ab4.story = {
  name: 'Icon'
};
