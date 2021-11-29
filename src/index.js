import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = (<div> Hey </div>)
  
function Tweet() {
  //1. update the Tweet component to accept a tweet prop
  return (
    <div className="tweet">
      HEY
    </div>
  );
}

ReactDOM.render(<Tweet  />, document.querySelector("#root"));