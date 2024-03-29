import React from 'react';
import { Page, Block } from '../../../components';//'../../../components';

export default {
  title: 'Containers|Page'

  // parameters: {
  //   component: Drawer,
  // },
};

export const title = () => (
  <div type="story">
    <div>
      <Page>
        {{
          header: (
            <Block
              lines={[
                'Page Title',
              ]}
            />
          ),
          body: 'Body Content',
        }}
      </Page>
    </div>
  </div>
)

export const titleAndDescription = () => {
  return (
    <div type="story">
      <div>
        <Page>
          {{
            header: (
              <Block
                lines={[
                  'Page Title',
                  'Pages are special containers that live and breath and are routed to.',
                ]}
              />
            ),
            body: 'Body Content',
          }}
        </Page>
      </div>
    </div>
  )
};

export const autoPolicy = () => {
  return (
    <div type="story">
      <div>
        <Page>
          {{
            header: (
              <Block
                lines={[
                  'Auto Policy',
                  'CAAS100383547',
                  'Policy Period 12/31/2018 to 12/31/2019',
                ]}
              />
            ),
            body: 'Body Content',
            footer: 'Footer Content',
          }}
        </Page>
      </div>
    </div>
  )
};
