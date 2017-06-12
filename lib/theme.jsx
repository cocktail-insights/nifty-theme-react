import React from 'react';

// import nifty theme css
import './css/nifty.css';
import './css/custom.css';

export default function NiftyTheme(props) {
  return (
    <div>{ props.children }</div>
  );
}
