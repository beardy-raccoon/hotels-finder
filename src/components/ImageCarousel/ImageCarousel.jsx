import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';
import { Carousel } from 'react-responsive-carousel';
import { IMAGES } from '../../utils/consts';

export default function ImageCarousel() {
  return (
    <div className="image-carousel">
      <Carousel
        showStatus={false}
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={33.3}
      >
        {IMAGES.map((image, index) => (
          <img key={index} className="image-carousel__image" src={image} alt={`Отель номер ${index}`} />
        ))}
      </Carousel>
    </div>
  );
}