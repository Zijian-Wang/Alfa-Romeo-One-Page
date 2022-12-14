import React from 'react'
import Slider from 'react-slick'
import img1 from '../img/img1.png'

export default function Gallery() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  }
  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt="alfa 1" />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  )
}
