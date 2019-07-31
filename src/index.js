//import React from 'react';
import React, { Component } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import ReactDOM from "react-dom";
import {
  UI,
  Page,
  Wrapper,
  Thing,
  Interview,
  Flag,
  Tag,
  Action,
  Block,
  ActionBlock,
  ActionButton,
  ActionLink,
  Group,
  Drawer,
  Title,
  Inputs,
  InputSelect,
} from './lib/components';
//import { Formik, Field, Form } from 'formik';
import './index.pcss';
import * as Yup from 'yup';

const validationSchema = Yup.object()
  .shape({
    name_first: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    name_last: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    name_full: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

//export const FormContext = React.createContext();

const App = () => (
    <div>
      <div>
        <section>
          <Switch>
            <Route exact path="/fields">
              <div>
                <InputSelect>
                  {{
                    options:[
                      { value: 'spouse', label: 'Spouse/Partner' },
                      { value: 'child', label: 'Child' },
                      { value: 'sibling', label: 'Sibling', selected:true },
                      { value: 'relative', label: 'Relative' },
                      { value: 'roommate', label: 'Roommate' },
                      { value: 'other', label: 'Other' },
                    ]
                  }}
                </InputSelect>
                <Inputs
                  id="names"
                  initialValues={{
                    name_first: '',
                    name_last: '',
                    name_middle: '',
                    name_suffix: '',
                    name: '',
                    email: '',
                    address_street: '',
                    address_city: '',
                    address_zip: '',
                    color:['']
                  }}
                  validationSchema={validationSchema}
                >
                  <UI.Field id="name_full" />
                  <UI.Fields id="name_person"/>

                  <UI.Field id="email" />

                  <UI.Fields id="lessor" />
                  <UI.Fields id="financier" />
                </Inputs>


              </div>
            </Route>

            <Route exact path="/pages">
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
                <spacer/>
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
                <spacer/>
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
            </Route>

            <Route exact path="/ui/inventory">
              <div>
                <UI.Block
                  id="twoLiner"
                  lines={[
                    'New Vehicle',
                    'Replacing 2006 Honda Accord',
                  ]}
                />
                <UI.Block id="twoLiner_with_flag"/>

                <UI.Block
                  id="threeLiner"
                  lines={[
                    'CAA9111929292',
                    'Auto Policy',
                    'Policy Period: 2018-2019',
                  ]}
                />
                <UI.Block
                  id="fourLiner"
                  lines={[
                    'CAA9111929292',
                    'Auto Policy',
                    'Policy Period: 2018-2019',
                    'A one-time payment was made in December 2018. Paid up through next year.',
                  ]}
                />
                <spacer type="section"/>

                <ActionBlock
                  lines={[
                    'New Vehicle',
                    'Replacing 2006 Honda Accord',
                  ]}
                />
                <ActionBlock
                  lines={[
                    'New Vehicle',
                    'Replacing 2006 Honda Accord',
                  ]}
                  indicator="Add Vehicle"
                />
                <ActionBlock
                  lines={[
                    'New Vehicle',
                    'Replacing 2006 Honda Accord',
                  ]}
                  indicator="arrow"
                />
                <spacer type="section"/>

                <UI.Action
                  id="block"
                  lines={[
                    'Emily Swamker',
                    'Removing driver from your policy.',
                    false,
                    'This element using the UI.Action id="block" syntax',
                  ]}
                />
                <UI.Action
                  id="driver_block"
                  driver="Emily Swamker"
                  description="Named Insured"
                />
                <spacer/>
                <UI.Action
                  id="driver_block"
                  driver="Emily Swamker"
                  description="Named Insured"
                  drawer="expanded"
                >
                  <UI.Drawer id="interview">
                    <UI.Question
                      id="remove_driver_reason"
                      driver="Emily"
                    />
                  </UI.Drawer>
                </UI.Action>
                <spacer type="section"/>

                <UI.Action
                  id="vehicle_block"
                  vehicle="2006 HONDA ACCORD"
                  vin="KDIOPW29812934"
                />
                <UI.Action
                  id="vehicle_block"
                  vehicle="2006 HONDA ACCORD"
                  vin="KDIOPW29812934"
                  drawer="expanded"
                >
                  <UI.Drawer id="interview">
                    <UI.Question
                      id="remove_driver_reason"
                      driver="Emily"
                    />
                  </UI.Drawer>
                </UI.Action>
                <spacer type="section"/>

                <ActionBlock
                  lines={[
                    'Emily Swanker',
                    'Removing driver from your policy',
                  ]}
                  drawer="expanded"
                >
                  <UI.Drawer id="interview">
                    <UI.Question
                      id="remove_driver_reason"
                      driver="Emily"
                    />
                  </UI.Drawer>
                </ActionBlock>
                <spacer type="section"/>

                <ActionBlock
                  lines={[
                    'William Jones',
                    'Tell us about this driver',
                  ]}
                  drawer="expanded"
                >
                  <UI.Drawer id="interview">
                    <UI.Question
                      id="state_licensed"
                      driver="William"
                    />
                  </UI.Drawer>
                </ActionBlock>
                <spacer/>
                <Action drawer="expanded">
                  <UI.Drawer id="interview">
                    <UI.Question
                      id="license_number"
                      driver="William"
                    />
                  </UI.Drawer>
                </Action>
                <spacer/>
                <Action drawer="expanded">
                  <UI.Drawer id="interview">
                    <UI.Question
                      id="age_licensed"
                      driver="William"
                    />
                  </UI.Drawer>
                </Action>
                <spacer/>
                <Action drawer="expanded">
                  <UI.Drawer id="interview">
                    <UI.Question
                      id="gender"
                      driver="William"
                    />
                  </UI.Drawer>
                </Action>
                <spacer/>
                <Action drawer="expanded">
                  <UI.Drawer id="interview">
                    <UI.Question
                      id="relationship_to"
                      driver="William"
                      driver2="Amanda"
                    />
                  </UI.Drawer>
                </Action>
                <spacer/>
                <Action drawer="expanded">
                  <UI.Drawer id="interview">
                    <UI.Question
                      id="marital_status"
                      driver="William"
                    />
                  </UI.Drawer>
                </Action>
                <spacer/>
                <Action drawer="expanded">
                  <UI.Drawer id="interview">
                    <UI.Question id="modifying_more"/>
                  </UI.Drawer>
                </Action>
                <spacer type="section"/>

                <layout type="columns">
                  <UI.Action id="link"/>
                  <spacer/>
                  <UI.Action
                    id="link"
                    label="Cancel"
                  />
                  <UI.Action
                    id="link"
                    label="Submit"
                  />
                  <UI.Action
                    id="link"
                    label="Save"
                  />
                  <spacer/>
                  <UI.Action id="back_link"/>
                  <UI.Action id="next_link"/>
                  <spacer/>
                  <UI.Action id="interview_nav"/>
                </layout>

                <spacer type="section"/>
                <layout type="columns">
                  <UI.Flag/>
                  <UI.Flag label="Override Flag Label"/>
                  <UI.Flag
                    label="Override Flag Label & Theme"
                    theme="grey"
                  />
                  <UI.Flag id="active"/>
                  <UI.Flag
                    id="active"
                    theme="r2d2"
                  />
                  <UI.Flag id="docs_uploaded"/>
                  <UI.Flag id="late_payment"/>
                </layout>

                <spacer/>
                <layout type="columns">
                  <UI.Tag/>
                  <UI.Tag
                    id="auto"
                  />
                  <UI.Tag
                    id="auto"
                    label="2017 Camry SE"
                  />
                </layout>

                <spacer type="section"/>
                <layout>
                  <UI.Icon id="auto"/>
                  <UI.Icon id="auto" hugeness="l"/>
                  <UI.Icon id="auto_xs"/>
                  <UI.Icon id="auto_small"/>
                  <UI.Icon id="auto_medium"/>
                  <UI.Icon id="auto_large"/>
                </layout>
              </div>
            </Route>

            <Route>
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

                <spacer type="section"/>
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
                <spacer type="section"/>
                <ActionBlock
                  icon={{
                    id: 'core-auto',
                    size: 'm',
                  }}
                  lines={[
                    'CAAS100383547',
                    'Second line about this and that',
                    'Policy Period 12/31/2018 to 12/31/2019',
                  ]}
                >
                  <Drawer>
                    {{
                      body: (
                        <Wrapper>
                          <Group id="1" type="step">
                            {{
                              header: (
                                <Title>Why are you removing Emily from your policy?</Title>
                              ),
                              body: 'select reason',
                            }}
                          </Group>
                        </Wrapper>
                      ),
                      footer: (
                        <React.Fragment>
                          <ActionLink>Back</ActionLink>
                          <ActionButton>Save</ActionButton>
                        </React.Fragment>
                      ),
                    }}
                  </Drawer>
                </ActionBlock>

                <spacer/>

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

                <spacer type="section"/>


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
                  id="addDriver"
                  lines={[
                    'CAAS100383547',
                    'w/ Drawer Prop (expanded)',
                  ]}
                />
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
                    'No Drawer + Arrow pointing Right',
                    'LINE 3: Policy Period 12/31/2018 to 12/31/2019',
                  ]}
                  indicator="arrow"
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
                <spacer type="section"/>
                <layout type="sidebyside">
                  <ActionButton>No</ActionButton>
                  <ActionButton>Yes</ActionButton>
                  <ActionButton>Assign Driver</ActionButton>
                  <ActionButton>Remove Vehicle</ActionButton>
                </layout>
                <spacer/>
                <layout type="sidebyside">
                  <ActionButton theme="secondary">No</ActionButton>
                  <ActionButton theme="secondary">Yes</ActionButton>
                  <ActionButton theme="secondary">Assign Driver</ActionButton>
                  <ActionButton theme="secondary">Remove Vehicle</ActionButton>
                </layout>
                <spacer/>
                <layout type="sidebyside">
                  <ActionButton disable="true">No</ActionButton>
                  <ActionButton disable="true">Yes</ActionButton>
                  <ActionButton disable="true">Assign Driver</ActionButton>
                  <ActionButton disable="true">Remove Vehicle</ActionButton>
                </layout>
                <spacer type="section"/>

                <Block
                  icon={{
                    id: 'core-auto',
                    size: 's',
                  }}
                  lines={[
                    'CAAS100383547',
                  ]}
                />
                <Action
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
                    size: 'm',
                  }}
                  lines={[
                    'CAAS100383547',
                  ]}
                />
                <Action
                  icon={{
                    id: 'core-auto',
                    size: 'l',
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
                <Block
                  lines={[
                    'CAAS100383547',
                    'Policy Period 12/31/2018 to 12/31/2019',
                  ]}
                />
                <Block
                  icon={{
                    id: 'core-auto',
                    size: 's',
                  }}
                  lines={[
                    'CAAS100383547',
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
                    'Policy Period 12/31/2018 to 12/31/2019',
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
                  ]}
                />
                <Block
                  lines={[
                    'CAAS100383547',
                    'Policy Period 12/31/2018 to 12/31/2019',
                    'This policy has ONE vehicle insured.',
                  ]}
                />
                <Block
                  icon={{
                    id: 'core-auto',
                    size: 's',
                  }}
                  lines={[
                    'CAAS100383547',
                    'Policy Period 12/31/2018 to 12/31/2019',
                    'This policy has ONE vehicle insured.',
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
                    size: 's',
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
            </Route>
          </Switch>
        </section>
      </div>
    </div>
)

const rootElement = document.getElementById('app');
const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    rootElement,
  );
};

render(App);
