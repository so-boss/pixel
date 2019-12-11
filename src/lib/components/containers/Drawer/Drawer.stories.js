import React from 'react';
import {
  Drawer,
  Interview,
  UI,
  ActionBlock
} from 'pixel';

export default {
  title: 'Containers|Drawer'
};

export const drawer1 = () => (
  <div type="story">
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
  </div>
)
drawer1.story = {
  name: 'Horizontal Workflow'
};

export const drawer2 = () => {
  return (
    <div type="story">
      <div>

          <UI.Drawer id="interview">
            <UI.Question
              id="relationship_to"
              driver="William"
              driver2="Amanda"
            />
          </UI.Drawer>

      </div>
    </div>
  )
};

drawer2.story = {
  name: 'Interview Question'
};
