import { Component } from 'react';

// import nifty theme css
import './nifty.css';

export default function NiftyTheme(props) {
  return (
    <div>{ props.children }</div>
  );
};
