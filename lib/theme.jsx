import React from 'react';

// import nifty theme css
import '.css/nifty.css';

export default function NiftyTheme(props) {
  return (
    <div>{ props.children }</div>
  );
}
