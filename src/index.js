import React from 'react';
import { render } from "react-dom";
//import { TextInput } from "./lib";
import { Title, Thing, Wrapper, Label, Message } from "./lib";


const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
      <Title>Hello Pixel</Title>
      <Thing>Hello Pixel</Thing>
      <Wrapper id='LabelAndMessage'>
          <Label
            random1='xyz'
          >Hello Pixel</Label>
          <Message>Hello Pixel</Message>
      </Wrapper>
  </div>
);

render(<App />, document.getElementById("root"));
