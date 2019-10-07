import React from 'react';

import { Block, Wrapper, Flag, Tag } from '../../../../../dist';//'../../../components';
import {withKnobs, text} from "@storybook/addon-knobs";

export default {
  title: 'Elements|Block',
  //addDecorator:withKnobs,
  parameters: {
    component: Block,
  },
};


export const oneLine = () => {
  const label = 'Line One';
  const defaultValue = 'CAAS100383547';
  const groupId = 'GROUP-ID1';

  const lineOneText = text(label, defaultValue, groupId);

  return (
    <Wrapper type="story">
      <div>
        <Block
          lines={[
            lineOneText,
          ]} />
        <Block
          lines={[
            'CAAS100383547',
          ]}
        />
      </div>
    </Wrapper>
  )
};

oneLine.story = {
  name: 'One Line'
  //notes: 'A very simple example of addon notes'
};

export const twoLines = () => (
  <Wrapper type="story">
    <div>
      <Block
        lines={[
          'Line One',
          'Line Two',
        ]} />
      <Block
        lines={[
          'CAAS100383547',
          'Policy Period 12/31/2017 to 12/31/2018',
        ]}
      />
    </div>
  </Wrapper>
);
twoLines.story = {
  name: 'Two Lines',
};

export const fourLinesOrLess = () => (
  <Wrapper type="story">
    <div>
      <Block
        lines={[
          'CAAS100383547',
          'Policy Period 12/31/2018 to 12/31/2019',
          'This policy has ONE vehicle insured.',
        ]}
      />
      <Block
        lines={[
          'CAAS100383547',
          'Policy Period 12/31/2018 to 12/31/2019',
          'This policy has ONE vehicle insured.',
          'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
        ]}
      />
      <Block
        icon={{
          id: 'core-auto',
          size: 'l',
        }}
        lines={[
          'CAAS100383547',
          'Policy Period 12/31/2018 to 12/31/2019',
          false,
          'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
        ]}
      />
    </div>
  </Wrapper>
);
fourLinesOrLess.story = {
  name: 'Four Lines (or less)',
};

export const icons = () => (
  <Wrapper type="story">

    <div>
      <Block
        icon={{
          id: 'core-auto',
          size: 's',
        }}
        lines={[
          'CAAS100383547',
        ]}
      />
      <Block
        icon={{
          id: 'core-auto',
          size: 'm',
        }}
        lines={[
          'CAAS100383547',
        ]}
      />
      <Block
        icon={{
          id: 'core-auto',
          size: 'l',
        }}
        lines={[
          'CAAS100383547',
        ]}
      />
    </div>
  </Wrapper>
);
icons.story = {
  name: 'Icons',
};

export const inlineFlagTag = () => (
  <Wrapper type="story">
    <div>
      <Block
        icon={{
          id: 'core-auto',
          size: 'm',
        }}
        lines={[
          '2015 Lexus ES',
          'Replacing 2006 Honda Accord',
          [
            {
              element: 'flag',
              theme: 'saber',
              label: 'Pending',
            },
          ],
        ]}
      />
      <Block
        icon={{
          id: 'core-auto',
          size: 'm',
        }}
        lines={[
          '2015 Lexus ES',
          'Replacing 2006 Honda Accord',
          [
            {
              element: 'tag',
              icon: 'core-auto',
              label: 'CAAS100383547',
            },
            {
              element: 'flag',
              theme: 'c3po',
              label: 'Policy Expired',
            },
          ],
        ]}
      />
      <Block
        icon={{
          id: 'core-auto',
          size: 'm',
        }}
        lines={[
          '2015 Lexus ES',
          'Replacing 2006 Honda Accord',
          [
            {
              element: 'flag',
              theme: 'saber',
              label: 'Pending',
            },
            {
              element: 'tag',
              icon: 'core-auto',
              label: 'CAAS100383547',
            },
          ],
        ]}
      />
    </div>
  </Wrapper>
);
inlineFlagTag.story = {
  name: 'Flag/Tag: Inline',
};
export const flagsRT = () => (
  <Wrapper type="story">
    <div>
      <Block
        lines={[
          'CAAS100383547',
          'Policy Period 12/31/2017 to 12/31/2018',
        ]}
        flag={{
          theme: 'bb8',
          label: 'Pending',
        }}
      />
      <Block
        icon={{
          id: 'core-auto',
          size: 'm',
        }}
        lines={[
          'CAAS100383547',
          'Policy Period 12/31/2017 to 12/31/2018',
        ]}
        flag={{
          theme: 'yoda',
          label: 'Active',
        }}
      />
    </div>
  </Wrapper>
);
flagsRT.story = {
  name: 'Flag/Tag: Right Align',
};

export const permutations = () => (
    <Wrapper type="story">
      <div>
        <Block
          lines={[
            'Line One',
          ]}
        />
        <Block
          lines={[
            'CAAS100383547',
          ]}
        />
        <spacer/>
        <Block
          lines={[
            'Line One',
            'Line Two',
          ]}
        />
        <Block
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2017 to 12/31/2018',
          ]}
        />
        <Block
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2017 to 12/31/2018',
          ]}
          flag={{
            theme: 'bb8',
            label: 'Pending',
          }}
        />
        <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2017 to 12/31/2018',
          ]}
        />

        <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2017 to 12/31/2018',
          ]}
          flag={{
            theme: 'yoda',
            label: 'Active',
          }}
        />
        <spacer/>
        <Block
          lines={[
            'Line One',
            'Line Two',
            ' ',
            'Line Four',
          ]}
        />
        <Block
          lines={[
            'CAAS100383547',
            'Second line about this and that',
            ' ',
            'Policy Period 12/31/2018 to 12/31/2019',
          ]}
        />
        <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Second line about this and that',
            ' ',
            'Policy Period 12/31/2018 to 12/31/2019',
          ]}
        />
        <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            '2015 Lexus ES',
            'Replacing 2006 Honda Accord',
            [
              {
                element: 'flag',
                theme: 'saber',
                label: 'Pending',
              },
            ],
          ]}
        />
        <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            '2015 Lexus ES',
            'Replacing 2006 Honda Accord',
            [
              {
                element: 'tag',
                icon: 'core-auto',
                label: 'CAAS100383547',
              },
              {
                element: 'flag',
                theme: 'c3po',
                label: 'Policy Expired',
              },
            ],
          ]}
        />
        <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            '2015 Lexus ES',
            'Replacing 2006 Honda Accord',
            [
              {
                element: 'flag',
                theme: 'saber',
                label: 'Pending',
              },
              {
                element: 'tag',
                icon: 'core-auto',
                label: 'CAAS100383547',
              },
            ],
          ]}
        />
        <spacer/>
        <Block
          lines={[
            'Line One',
            'Line Two',
            'Line Three',
            'Line Four',
          ]}
        />
        <Block
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2018 to 12/31/2019',
            'This policy has ONE vehicle insured.',
            'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
          ]}
        />
        <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2018 to 12/31/2019',
            'This policy has ONE vehicle insured.',
            'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
          ]}
        />
        <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2018 to 12/31/2019',
            'This policy has ONE vehicle insured.',
            [
              {
                element: 'tag',
                icon: 'core-auto',
                label: 'CAAS100383547',
              },
            ],
          ]}
          flag={{
            theme: 'saber',
            label: 'Active',
          }}
        />
        <Block
          icon={{
            id: 'core-auto',
            size: 'm',
          }}
          lines={[
            'CAAS100383547',
            'Policy Period 12/31/2018 to 12/31/2019',
            'This policy has ONE vehicle insured.',
            'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
          ]}
          flag={{
            theme: 'c3po',
            label: 'Inactive',
          }}
        />
      </div>
    </Wrapper>
)
