import React from 'react';
import PropTypes from 'prop-types';
import './Icon.pcss';
const sprites = require("./sprite.svg");

export default function Icon({id, hugeness}) {
  /*
    <Icon id='core-auto' hugeness='xs' />
    <use xlinkHref={`${Icons}#pixel-${id}`} />
    href={`sprite.svg#${id}`}
 */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`icon ${id}`}
      hugeness={hugeness}>
        <use xlinkHref={`sprite.svg#pixel-${id}`} />
    </svg>
  );
}

// Icon.UIs = require('@pixel/components/elements/Icon/ui.js')
Icon.displayName = 'Icon';
Icon.propTypes = {
  id: PropTypes.string,
};


Icon.defaultProps = {
  // drawer: 'false'
};
