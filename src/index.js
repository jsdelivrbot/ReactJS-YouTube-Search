

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBoYi2FabTo31RbTg7LCu0kgBC9z7tz2xE';


import SearchBar from  './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';







// Create a new component. This component should produce some HTML
class App extends Component {
  constructor (props){
    super(props);
    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });

  }
  render() {
  return (
    <div>
      <SearchBar />
      <VideoDetail videos={this.state.videos[0]}/>
      <VideoList videos={this.state.videos} />

    </div>
  );
  }
}


//Take this component generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
