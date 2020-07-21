import React from 'react';
import {
  Input,
  UI,
  Page,
  Wrapper,
  Thing,
  Interview,
  Flag,
  Tag,
  Field,
  Action,
  Block,
  ActionBlock,
  ActionButton,
  ActionLink,
  Icon,
  Group,
  Drawer,
  Title,
  Inputs,
  InputSelect,
} from '../';
//import { Formik, Field, Form, ErrorMessage } from 'formik';

const _ = require('lodash');
const __ = require('../../utils/uis.js');

const config = function (...props) {
  return __.merge(...props);
};

/*
      TODOS:
      1. Establish easier way to merge/extend data
      2. Desiginate way to indicate if a package is dynamic
*/
const uis = {};
uis.block = {
  /*
      <UI.Block
        id="twoLiner"
        lines={[
          'New Vehicle',
          'Replacing 2006 Honda Accord',
        ]}
      />
  */
  twoLiner ({ lines }) {
    return (
      <Block
        lines={config(
          [
            'Line 1',
            'Line 2',
          ],
          lines,
        )
        }
      />
    );
  },
  /*
        <UI.Block id="twoLiner_with_flag" />
  */
  twoLiner_with_flag ({ lines, flag }) {
    return (
      <Block
        lines={config(
          [
            'Line 1',
            'Line 2',
          ],
          lines,
        )
        }
        flag={config(
          {
            theme:'bb8',
            label:'Pending',
          },
          flag)
        }
      />
    );
  },
  /*
        <UI.Block
            id="threeLiner"
            lines={[
              'CAA9111929292',
              'Auto Policy',
              'Policy Period: 2018-2019',
            ]}
          />
   */
  threeLiner ({ lines }) {
    return (
      <Block
        lines={config(
          [
            'Line 1',
            'Line 2',
            'Line 3',
          ],
          lines,
        )
        }
      />
    );
  },
  /*
        <UI.Block
          id="fourLiner"
          lines={[
            'CAA9111929292',
            'Auto Policy',
            'Policy Period: 2018-2019',
            'A one-time payment was made in December 2018. Paid up through next year.',
          ]}
        />
   */
  fourLiner ({ lines }) {
    return (
      <Block
        lines={config(
          [
            'Line 1',
            'Line 2',
            'Line 3',
            'Line 4',
          ],
          lines,
        )
        }
      />
    );
  },
};

uis.action = {
  /*
      <UI.Action id='link'/>
      <UI.Action id='link'
        label='Action Link'
      />
  */
  link ({ label }) {
    return (
      <ActionLink>
        {config('Default Action Link', label)}
      </ActionLink>
    );
  },
  /*
       <UI.Action id='back_link' />

       <ActionLink>Back</ActionLink>
  */
  back_link () {
    return (
      <UI.Action
        id="link"
        label="back"
      />
    );
  },
  /*
      <UI.Action id='next_link' />

      <ActionLink>Next</ActionLink>
  */
  next_link () {
    return (
      <UI.Action
        id="link"
        label="next"
      />
    );
  },
  /*
    <UI.Action id="interview_nav" />
  */
  interview_nav () {
    return (
      <React.Fragment>
        <UI.Action id="back_link" />
        <UI.Action id="next_link" />
      </React.Fragment>
    );
  },
  /*
      <UI.Action
        id="block"
        lines={[
          "Emily Swamker",
          "Removing driver from your policy." ,
        ]}
      />

      <UI.Action
        id="driver_block"
        lines={[
          "Emily Swamker",
          "Named insured" ,
        ]}
      />
  */
  block ({ lines }) {
    return (
      <ActionBlock
        lines={config(
          [
            'Line 1',
          ],
          lines,
        )
        }
      />
    );
  },
  /*
      <UI.Action
        id="driver_block"
        driver="Emily Swamker"
        description="Named Insured"

        drawer="expanded"
      />

      TODO: Make ActionBlock auto sensing of <Drawer>
            ...so it can auto detect when it contains a drawer
  */
  driver_block ({ driver, description, ...rest }) {
    return (
      <ActionBlock
        lines={[
          config('Driver First & Last Name', driver),
          config('Description about driver or process driver is associated.', description),
        ]}
        {...rest}
      />
    );
  },
  /*
      <UI.Action
        id="vehicle_block"
        vehicle="2006 HONDA ACCORD"
        vin="KDIOPW29812934"

        drawer="expanded"
      />

      TODO: Make ActionBlock auto sensing of <Drawer>
            ...so it can auto detect when it contains a drawer
  */
  vehicle_block ({ vehicle, vin, ...rest }) {
    return (
      <ActionBlock
        lines={[
          config("Vehicle's Year, Make & Model", vehicle),
          `VIN: ${config('Numberical ID.', vin)}`,
        ]}
        {...rest}
      />
    );
  },
};
uis.tag = {
  /*
      <UI.Tag
        icon="core-auto"
        label="2017 Camry SE"
      />
  */
  def ({ icon, label }) {
    return (
      <Tag icon={config('circle-full', icon)}>
        {config('Default Tag Label', label)}
      </Tag>
    );
  },
  /*
      <UI.Tag
        id="auto"
        label="2017 Camry SE"
      />

      <Tag icon="core-auto">
        2017 Toyota Camry SE
      </Tag>
  */
  auto ({ label }) {
    return (
      <UI.Tag
        icon="core-auto"
        label={config('Default Automobile: Year/Make/Model', label)}
      />
    );
  },
};
uis.flag = {
  /*
      NOTE: If a UI Package type have a def method,
            which it should unless the package is super unique,
            packages belonging to that package type, without
            an ID specified, will configure def.

      TODO: Explore adding def concept to subtypes (requires identifying
            deeper meta data concept
            -- I.E. <UI.Action id="link" label="link text"/>

            There different types of actions, which differe by
            different what child components <Action> contains.
            SO like action > link vs action > block have different def()

      TODO: Still need to figure out an easy way to identify what props
            have been exposed for confiration.
  */
  def ({ theme, label }) {
    return (
      <Flag theme={config('saber', theme)}>
        {config('Default Flag Label', label)}
      </Flag>
    );
  },
  /*
      <UI.Flag
        id="active"
        theme="r2d2"
      />

      <Flag theme="yoda">
        Active
      </Flag>
  */
  active ({ theme }) {
    return (
      <UI.Flag
        theme={config('yoda', theme)}
        label="active"
      />
    );
  },
  /*
      <UI.Flag
        id="docs_uploaded"
      />

      <Flag theme="saber">
        Documents Uploaded
      </Flag>
  */
  docs_uploaded ({ theme }) {
    return (
      <UI.Flag
        theme={config('saber', theme)}
        label="documents uploaded"
      />
    );
  },
  /*
      <UI.Flag
        id="late_payment"
      />

      <Flag theme="c3po">
        Late Payment
      </Flag>
  */
  late_payment ({ theme }) {
    return (
      <UI.Flag
        theme={config('c3po', theme)}
        label="late payment"
      />
    );
  },
  /*
      <UI.Flag
        id="unpaid_premium"
      />
      <Flag theme="redLeader">
        Unpaid Premium
      </Flag>
  */
  unpaid_premium ({ theme }) {
    return (
      <UI.Flag
        theme={config('redLeader', theme)}
        label="unpaid premium"
      />
    );
  },
  /*
      <UI.Flag
        id="ubi_disconnected"
      />
      <Flag theme="bb8">
        UBI Disconnected
      </Flag>
  */
  ubi_disconnected ({ theme }) {
    return (
      <UI.Flag
        theme={config('bb8', theme)}
        label="UBI disconnected"
      />
    );
  },
  /*
      <UI.Flag
        id="grey_info"
        label="Underage Driver"
      />

      <Flag theme="grey">
        Something Grey
      </Flag>
  */
  grey_info ({ label }) {
    return (
      <UI.Flag
        theme="grey"
        label={config('something grey', label)}
      />
    );
  },
};

uis.drawer = {
  // def () {
  //   return (
  //     <Drawer />
  //   );
  // },
  /*
      <UI.Drawer id="interview">
        <UI.Question id="remove_driver">
      </Drawer>
  */
  interview ({ children, ...rest }) {
    return (
      <Drawer type="interview">
        {{
          body:(
            <Wrapper>
              {children}
            </Wrapper>
          ),
          footer:(
            <UI.Action id="interview_nav" />
          ),
        }}
      </Drawer>
    );
  },
};
/*

*/
uis.question = {
  /*
        <UI.Question
            question='Ask a question'
            answer=
        />
  */
  def ({ question, answers }) {
    return (
      <Group id="1" type="step">
        {{
          header: config('Ask a question', question),
          body: answers
        }}
      </Group>
    );
  },
  /*
        <UI.Question
          id="remove_driver_reason"
          driver="Emily"
        />
  */
  remove_driver_reason ({ driver }) {
    return (
      <UI.Question
        question={`Why are you removing ${config('Driver One', driver)} from your policy?`}
        answers={(
          <UI.Answer id="removal_reason" />
        )}
      />
    );
  },
  /*
        <UI.Question
          id="state_licensed"
          driver="William"
        />

        TODO: Need to allow for passing specific types of data..like driver name
  */
  state_licensed ({ driver }) {
    return (
      <UI.Question
        question={`What state is ${config('Driver One', driver)} licensed in?`}
        answers={(
          <UI.Answer id="state" />
        )}
      />
    );
  },
  /*
        <UI.Question
          id="license_number"
          driver="William"
        />
  */
  license_number ({ driver }) {
    return (
      <UI.Question
        question={`Please enter ${config('Driver One', driver)}'s license number.`}
      />
    );
  },
  /*
        <UI.Question
          id="age_licensed"
          driver="William"
        />
  */
  age_licensed ({ driver }) {
    return (
      <UI.Question
        question={`At what age was ${config('Driver One', driver)} first licensed?`}
      />
    );
  },
  /*
        <UI.Question
          id="gender"
          driver="William"
        />
  */
  gender ({ driver }) {
    return (
      <UI.Question
        question={`Please select ${config('Driver One', driver)}'s gender.`}
      />
    );
  },
  /*
        <UI.Question
          id="relationship_to"
          driver="William"
          driver2="Amanda"
        />
  */
  relationship_to ({ driver, driver2 }) {
    return (
      <UI.Question
        question={`What is ${config('Driver One', driver)}'s relationship to ${config('Driver Two', driver2)}?`}
        answers={(
          <UI.Answer id="relationship" />
        )}
      />
    );
  },
  /*
        <UI.Question
          id="marital_status"
          driver="William"
        />
  */
  marital_status ({ driver }) {
    return (
      <UI.Question
        question={`What is ${config('Driver One', driver)}'s marital status?`}
      />
    );
  },
  /*
        <UI.Question id="modifying_more" />
  */
  modifying_more () {
    return (
      <UI.Question
        question="Will you be adding or removing any other drivers or vehicles?"
      />
    );
  },
};

uis.answer = {
  /*
   <UI.Answer
      type="select"
      options={[
        { value: 'spouse', label: 'Spouse/Partner' },
        { value: 'child', label: 'Child' },
        { value: 'sibling', label: 'Sibling', selected:true },
        { value: 'relative', label: 'Relative' },
        { value: 'roommate', label: 'Roommate' },
        { value: 'other', label: 'Other' },
      ]}
    />
  */
  select({ options, ...rest }) {
    return (
      <InputSelect
        {...rest}
      >
        {{
          options:options
        }}
      </InputSelect>
    );
  },
  /*
      <UI.Answer id="state" />

      TODO: Allow passing props for selecting certain options, triggering actions
  */
  state({}){
    return (
      <UI.Answer
        id="select"
        options={[
          { value: 'arizona', label: 'Arizona' },
          { value: 'alaska', label: 'Alaska' },
          { value: 'arkansas', label: 'Arkansas' },
          { value: 'washington', label: 'Washington', selected:true },
          { value: 'california', label: 'California' },
          { value: 'oregon', label: 'Oregon' },
        ]}
      />
    )
  },
  /*
      <UI.Answer id="relationship" />
  */
  relationship({}) {
    return (
      <UI.Answer
        id="select"
        options={[
          { value: 'spouse', label: 'Spouse/Partner' },
          { value: 'child', label: 'Child' },
          { value: 'sibling', label: 'Sibling', selected:true },
          { value: 'relative', label: 'Relative' },
          { value: 'roommate', label: 'Roommate' },
          { value: 'other', label: 'Other' },
        ]}
      />
    )
  },
  /*
      <UI.Answer id="removal_reason" />
  */
  removal_reason({}) {
    return (
      <UI.Answer
        id="select"
        options={[
          { value: 'because', label: 'Just Because' },
          { value: 'moving', label: 'Moving' },
          { value: 'sibling', label: 'Do not know', selected:true }
        ]}
      />
    )
  }
}

/*
    TEXT
    address
      - financial interest
      - financier
      - lessor
      - simple
    name
      - first
      - middle
      - last
      - full
      - suffix
      - business
    email

    NUMBER
    phone
      - contact info
      - fax
      - home
      - mobile
      - work
    date
      - payment
      - dob
    bank
    currency
      - payment amount
    credit card
    vin

    ALPHANUMBERIC
    drivers license

*/
uis.field = {
  /*
     <UI.Field
        mask="michael"
        {...props}
      />

    TODO: Explore how to create sub-sub types for things like
          Field > Text defs
*/
  def ({ ...rest }) {
    return (
      <Field
        type="text"
        {...rest}
      />
    );
  },
  select ({ ...rest }) {
    /*
      <Input
        type="select"
        {...rest}
      />
    */
    return (
      <InputSelect />
    );
  },
  /*
     <UI.Field
        id="name_first"
     />
  */
  name_first ({ id, ...rest }) {
    return (
      <UI.Field
        name={id}
        label="first name"
        {...rest}
      />
    );
  },
  /*
     <UI.Field
        id="name_middle"
     />
  */
  name_middle ({ id, ...rest }) {
    return (
      <UI.Field
        name={id}
        label="middle"
        {...rest}
      />
    );
  },
  /*
       <UI.Field
          id="name_last"
       />
  */
  name_last ({ id, ...rest }) {
    return (
      <UI.Field
        name={id}
        label="last name"
      />
    );
  },
  /*
       <UI.Field
          id="name_full"
       />
  */
  name_full ({ id, ...rest }) {
    return (
      <UI.Field
        id="name"
        {...rest}
      />
    );
  },
  /*
      TODO: Add drop down field and migrate this into a drop down

       <UI.Field
          id="name_suffix"
       />
  */
  name_suffix ({ id }) {
    return (
      <UI.Field
        name={id}
        label="suffix"
      />
    );
  },
  /*
      <UI.Field
        id="name"
      />

      <UI.Field
        id="name"
        label="Name of Lessor"
      />

      <UI.Field
        id="name"S
        label="Name of Financier"
        mask="ACME Holdings"
      />
  */
  name ({ id, label, mask }) {
    return (
      <UI.Field
        name={id}
        label={config('full name', label)}
        mask={mask}
      />
    );
  },
  /*
     <UI.Field
        id="email"
        mask="email@example.com"
     />
  */
  email ({ id, mask }) {
    return (
      <UI.Field
        name={id}
        mask={config('email@domain.com', mask)}
        label="email"
      />
    );
  },
  /*
       <UI.Field
          id="address_street"
       />
  */
  address_street ({ id }) {
    return (
      <UI.Field
        name={id}
        label="Street Address"
      />
    );
  },
  /*
       <UI.Field
          id="address_city"
          {...props}
       />
  */
  address_city ({ id }) {
    return (
      <UI.Field
        name={id}
        label="City"
      />
    );
  },
  /*
       <UI.Field
          id="address_zip"
          mask="94553"
       />

        NOTE: Is there a difference between a
              1. "zip"
              2. "address_zip"
  */
  address_zip ({ id, mask }) {
    return (
      <UI.Field
        name={id}
        mask={config('00000', mask)}
        label="Zip Code"
        spacing="natural"
      />
    );
  },
};

/*
     TODO: Evaluate whether to create a new type of <Wrapper> called <Fields>
*/
uis.fields = {
  /*
       <UI.Fields
          id="address"
       />
  */
  address ({ id }) {
    return (
      <Wrapper>
        <UI.Field id="address_street" />
        <Wrapper layout="wrap">
          <UI.Field id="address_city" />
          <UI.Field id="address_zip" />
        </Wrapper>
      </Wrapper>
    );
  },
  /*
        <UI.Fields
           id="lessor"
        />
  */
  lessor ({id}) {
    return (
      <Wrapper id={id}>
        <UI.Field
          id="name"
          label="Name of Lessor"
          mask="ACME Holdings"
        />
        <UI.Fields id="address"/>
      </Wrapper>
    )
  },
  /*
        <UI.Fields
           id="financier"
        />
  */
  financier ({id}) {
    return (
      <Wrapper id={id}>
        <UI.Field
          id="name"
          label="Name of Financier"
          mask="ACME Bank"
        />
        <UI.Fields id="address"/>
      </Wrapper>
    )
  },
  /*
       <UI.Fields
          id="name_person"
       />
  */
  name_person ({ id }) {
    return (
      <Wrapper>
        <Wrapper layout="wrap">
          <UI.Field id="name_first"/>
          <UI.Field id="name_middle"/>
        </Wrapper>
        <Wrapper layout="wrap">
          <UI.Field id="name_last" />
          <UI.Field id="name_suffix" />
        </Wrapper>
      </Wrapper>
    );
  },
}



// TODO: Explore & Finalize how/where to store inventories
uis.icon = require('../elements/Icon/ui.inventory.js');

export {uis};
