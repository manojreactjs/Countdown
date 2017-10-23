import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import 'font-awesome/css/font-awesome.min.css';

// Random component
const Completionist = () => <span>You are good to go!</span>;
var divStyle = {
 width: "8vw",
    height: "4vh",
    border: "solid 1px grey",
    padding: "1em"
};

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return <div style={divStyle}><span><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{minutes}:{seconds}</span></div>;
  }
};

ReactDOM.render(
  <Countdown
    date={Date.now() + 1800000}
    renderer={renderer}
  />,
  document.getElementById('app')
);