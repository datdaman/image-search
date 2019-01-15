import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Pagination from './Pagination';

class App extends React.Component {

  state = { 
    term : '',
    images : [],
    totalPhotos: 0,
    perPage: 15,
    page: 1,
   }
  
  componentDidUpdate(prepProps, prevState) {
    if(prevState.term !== this.state.term){
      this.getImages(this.state.term, this.state.page)
    }
  }

  getImages = (term, page) => {
    const { perPage } = this.state;
    const options = {
      params: {
        query: this.state.term,
        page: page,
        per_page: perPage
      }
    };
    unsplash.get('/search/photos', options)
    .then( resp => {
      this.setState({ 
        images : resp.data.results,
        totalPhotos : resp.data.total < 100 ? resp.data.total : 100,
      })
    })
  }

  onSearchSubmit = (term) => {
    this.setState({ term, page : 1 })
  }

  render(){
    return(
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} setTerm={this.setTerm}/>
        {!!this.state.images.length &&
          <Pagination
            term={this.state.term}
            total= {this.state.totalPhotos}
            perPage={this.state.perPage} 
            onPageChanged={this.getImages}
            startingPage={this.state.page}
          />
        }
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App;