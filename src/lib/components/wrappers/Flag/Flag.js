import React, {  } from 'react';
import PropTypes from 'prop-types';
import './Flag.pcss';

import { Block } from '../../';

export default function Flag ({ children, theme, ...rest}) {
  return (
    <flag
      theme={theme}
      {...rest}
    >
      <Block
        lines={[
          children,
        ]}
      />
    </flag>
  );
}

Flag.defaultProps = {
  theme: 'grey',
};

Flag.propTypes = {
  theme: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.array,
};
