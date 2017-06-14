import React from 'react';

// import nifty theme css
import './css/font-awesome/font-awesome.min.css';
import './css/bootstrap.css';
import './css/nifty.css';
import './css/custom.css';

export default function NiftyTheme(props) {
  return (
    <div>{ props.children }</div>
  );
}
