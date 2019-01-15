import React from 'react';
import './ImageCard.css';

class ImageCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = { spans: 0 }
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current && this.imageRef.current.clientHeight + 140
    const spans = Math.ceil(height/10)
    this.setState({ spans })
  }

  render() {
    //user.profile_image first_name, last_name
    //likes
    const {description, urls, user} = this.props.image
    return(
      <div className="card-container" style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <div className="ui card">
          <div className="content"> 
            <img alt={'profile picture'} className="ui avatar image" src={user.profile_image.small}/> {user.name}
          </div>
          <img 
            ref={this.imageRef}
            alt={description}
            src={urls.regular}
          />
          <div className="content">
            <span className="right floated">
              <i className="hear outline like icon"/>
              {this.props.image.likes} likes
            </span>
          </div>
        </div>
      </div>
    )
  }

}

export default ImageCard