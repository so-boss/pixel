import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import "../src/storybook/styles.css";
import "../dist/index.css";

import {
  // ELEMENTS
  Block, Title, Button, Icon, Thing, Field,
  // WRAPPERS
  Wrapper, Action, ActionBlock, ActionButton, ActionLink, Flag, Tag, Input, InputSelect, Inputs, Label, Message, Interview,
  //CONTAINERS
  Container, Drawer, Group, Page, UI
} from '../dist/index';

const blockStories = storiesOf('Elements|Block', module);

blockStories.addDecorator(withKnobs);
blockStories
  .addParameters({ component: Block })



storiesOf('Action|Button', module)
  .add('in groups', () => (
    <Wrapper type="story">
      <div>
      </div>
    </Wrapper>
  ))

const actionBlockStories = storiesOf('Wrappers|Action/Block', module);

actionBlockStories
  .add('multiple lines', () => {
      return (
        <Wrapper type="story">
          <div>

          </div>
        </Wrapper>
      )
    },
    {
      notes: 'A very simple example of addon notes'
    }
  )
  .add('right > arrow icon', () => {
    return (
      <Wrapper type="story">
        <div>

        </div>
      </Wrapper>
    )
  })
  .add('right > action label', () => {
    return (
      <Wrapper type="story">
        <div>

        </div>
      </Wrapper>
    )
  })
  .add('icon', () => {
    return (
      <Wrapper type="story">
        <div>

        </div>
      </Wrapper>
    )
  })
