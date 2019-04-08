import React from 'react';
import { render } from "react-dom";

import {Wrapper, Label } from "./lib";


const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <Wrapper>
      <Label currency="$">1000</Label>
      <Label currency="$" multi={2}>
        {["$1M", "$2M"]}
      </Label>
    </Wrapper>
  </div>
);

render(<App />, document.getElementById("root"));
