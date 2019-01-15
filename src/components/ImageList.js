import React from 'react';

const ImageList = props => {
  const images = props.images.map(image => {
    return console.log(image)
  })

  return(
    <div className="image-list">
      {images}
    </div>
  )
}

export default ImageList