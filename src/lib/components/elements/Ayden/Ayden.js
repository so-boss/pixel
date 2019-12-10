import React from "react";
import './Ayden.pcss';

const Thumbnail = function(url) {
  return (
    <img src={url} />
  )
}


/*
    <Ayden id=2>
      <div>Micah</div>
    </Ayden>

*/
export default function Ayden ({children, ...rest}) {
  return (
    <div>
      <Thumbnail src="media/logo.svg" />
      {children}
    </div>
  );
}
