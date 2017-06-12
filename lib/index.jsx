import React from 'react';

// import nifty theme css
import './nifty.css';

export default function NiftyTheme(props) {
  return (
    <div>{ props.children }</div>
  );
}

NiftyTheme.propTypes = {
  children: React.PropTypes.node,
};

NiftyTheme.defaultProps = {
  children: React.PropTypes.node,
};
