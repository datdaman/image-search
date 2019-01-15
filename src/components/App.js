import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

  state = { images : [] }

  onSearchSubmit = term => {
    unsplash.get('/search/photos', {
      params:{ query: term, per_page: 30 },
    }).then( resp => {
      this.setState({ images : resp.data.results })
      console.log('resp', resp.data.results)
    })

  }

  render(){
    return(
      <div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App;