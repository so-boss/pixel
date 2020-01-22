import React from 'react';

const WrapperContext = React.createContext({
  drawer:{
    expanded:false
  }
});

export const WrapperProvider = WrapperContext.Provider;
export const WrapperConsumer = WrapperContext.Consumer;
export default WrapperContext;
