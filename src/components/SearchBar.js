import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render(){
    return(
      <div className="ui segment">
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