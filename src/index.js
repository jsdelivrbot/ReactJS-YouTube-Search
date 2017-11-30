// Create a new component. This component should produce some HTML
//Take this component generated HTML and put it on the page (in the DOM)
import React from 'react';
import ReactDOM from 'react-dom';
const App = function(){
  return <div>Hi!</div>;
}

ReactDOM.render(<App />);
