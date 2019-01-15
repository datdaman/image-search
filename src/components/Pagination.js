import React from 'react';
import './Pagination.css';

class Pagination extends React.Component {  

  state = {
    totalPages : [],
    currentPage : this.props.startingPage
  }

  componentDidMount(){
    this.updateTotalPages()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.term !== this.props.term){
      this.setState({currentPage : 1})
    }
    if(prevProps.total !== this.props.total){
      this.updateTotalPages()
    }
  }

  updateTotalPages() {
    let pages = [];
    for(let i = 1; i <= this.totalPages(); i++) {
      pages.push(i)
    };
    this.setState({ totalPages : pages })
  }

  totalPages() {
    return Math.ceil(this.props.total / this.props.perPage);
  }

  clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }

  navigatePage(val) {
    const{currentPage, totalPages} = this.state
    return this.clamp(currentPage + val, 1, totalPages.length)
  }

  changePage(page) {
    this.setState({currentPage : page})
    this.props.onPageChanged(this.props.term, page);
  }

  render() {
    return (
      <div className="pagination">
        <div className="pagination__left">
          <button onClick={e => this.changePage(this.navigatePage(-1))}>Prev</button>
        </div>

        <div className="pagination__mid">
          <ul>
            <li>
              <button href="#" onClick={e => this.changePage(1)}>1</button>
            </li>
            <li>...</li>
            {
              this.state.totalPages.map((page, index) => {
                return (
                  <li key={index}>
                    <button onClick={e => { this.changePage(page) }}
                      className={ this.state.currentPage === page ? 'current' : '' }
                    >{ page }</button>
                  </li>
                );
              })
            }
            <li >...</li>
            <li >
              <button onClick={e => { this.changePage(this.totalPages()) }}>{ this.totalPages()  }</button>
            </li>
          </ul>
        </div>

        <div className="pagination__right">
          <button onClick={e => { this.changePage(this.navigatePage(1))} }>Next</button>
        </div>
      </div>
    );    
  }
};

export default Pagination