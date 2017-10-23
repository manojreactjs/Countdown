import React from 'react';

class AwesomeComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = { counter : props.val-Date.now()}
  } 

  render() {
    var x = this;
    var { counter } = this.state;
    setTimeout(function() {
      if (counter>0) {
        x.setState({ counter: counter - 1000 });
      }
    }, 1000);
    
   var minutes = Math.floor(counter / 60000);
  var seconds = ((counter % 60000) / 1000).toFixed(0); 
    return <div>counting started at {minutes}{counter}, currently at: {minutes}: {seconds}</div>;
  }
}


export default AwesomeComponent;