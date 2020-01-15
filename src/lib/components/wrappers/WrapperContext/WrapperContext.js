import React from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const WrapperContext = React.createContext({
  drawer:{
    expanded:false
  }
});
export default WrapperContext;
