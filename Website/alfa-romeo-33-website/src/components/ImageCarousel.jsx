import React from 'react'
// import img1 from '../img/img1.png'
// import img2 from '../img/img2.png'
// import img3 from '../img/img3.png'
// import img4 from '../img/img4.png'
import longImage from '../img/longImage.png'

const ImageCarousel = () => {
  // const images = [img1, img2, img3, img4]

  return (
    <>
      <div className="carousel">
        <img src={longImage} alt={'Alfa Romeo 33 Stradale Images'} />
      </div>
    </>
  )
}

export default ImageCarousel
