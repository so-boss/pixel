import React from 'react';
import { Block, Wrapper, Drawer, Interview, Group, UI, Flag, Tag, Action, ActionBlock } from '../../../../../dist/module';

export default {
  title: 'Containers|Drawer',

  parameters: {
    component: Drawer,
  },
};

export const drawer1 = () => {
  return (
    <Wrapper type="story">
      <div>
        <ActionBlock
          lines={[
            'New Vehicle',
            'Replacing 2006 Honda Accord',
          ]}
        >
        <Drawer>
          {{
            body: (
              <Interview id="removeDriver">
                {{
                  header: 'Why are you removing Emily from your policy?',
                  body: 'select reason',
                }}
                {{
                  header: 'Why are you removing Emily from your policy?',
                  body: 'select reason',
                }}
                {{
                  header: 'Why are you removing Emily from your policy?',
                  body: 'select reason',
                }}
              </Interview>
            ),
            footer: (
              <UI
                element="action"
                id="interview_nav"
              />
            ),
          }}
        </Drawer>
        </ActionBlock>
      </div>
    </Wrapper>
  )
};
drawer1.story = {
  name: 'Horizontal Workflow'
};

export const drawer2 = () => {
  return (
    <Wrapper type="story">
      <div>

          <UI.Drawer id="interview">
            <UI.Question
              id="relationship_to"
              driver="William"
              driver2="Amanda"
            />
          </UI.Drawer>

      </div>
    </Wrapper>
  )
};

drawer2.story = {
  name: 'Interview Question'
};
