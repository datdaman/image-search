import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  state = { term: '' }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render(){
    return(
      <div className="ui segment search-bar">
        <form className="ui form icon input" style={{width: '100%'}} onSubmit={this.onFormSubmit}>
            <input 
              type="text"  
              placeholder="Search "
              value={this.state.term}
              onChange={e => {this.setState({ term: e.target.value })}}
            />
            <i className="search icon"/>
        </form>
      </div>
    )
  }
}

export default SearchBar;