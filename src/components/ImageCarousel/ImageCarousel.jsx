import './ImageCarousel.css';
import React from 'react';
import forestImg from '../../assets/images/forest.jpeg';
import roadImg from '../../assets/images/road.jpeg';
import lakeImg from '../../assets/images/lake.jpeg';

export default function ImageCarousel() {

  return (
    <div className="image-carousel-container">
      <img src={lakeImg} alt="" className="image-carousel__image" />
      <img src={roadImg} alt="" className="image-carousel__image" />
      <img src={forestImg} alt="" className="image-carousel__image" />
      <img src={lakeImg} alt="" className="image-carousel__image" />
    </div>
  )
}