// Create a new component. This component should produce some HTML

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from  './components/search_bar';

const API_KEY = 'AIzaSyBoYi2FabTo31RbTg7LCu0kgBC9z7tz2xE';
const App = () => {
  return (
    <div>
      <SearchBar />

    </div>
  );
}


//Take this component generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
