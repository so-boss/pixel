import React from 'react';
import {
  Drawer,
  Interview,
  UI,
  ActionBlock,
  Action,
  Wrapper,
  Group,
  Title,
  ActionLink
} from '../../../components';

export default {
  title: 'Containers|Drawer'
};

export const drawer1 = () => (
  <div type="story">
    <div>
      <ActionBlock
        lines={[
          'Add Driver',
          'Get coverage for another driver in your household',
        ]}
      >
        <Drawer>
          {{
            body: (
              <Wrapper>
                <Group id="1" type="step">
                  {{
                    header: (
                      <Title>Pleasae enter the following information:</Title>
                    ),
                    body: (
                      <form>
                        <input placeholder="First Name"/>
                        <input placeholder="Middle"/>
                        <input placeholder="Last Name"/>
                        <input placeholder="Suffix"/>
                        <input placeholder="Date of Birth"/>
                      </form>
                    ),
                  }}
                </Group>
              </Wrapper>
            ),
            footer: (
              <React.Fragment>
                <ActionLink>Back</ActionLink>
                <ActionLink>Next</ActionLink>
              </React.Fragment>
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
