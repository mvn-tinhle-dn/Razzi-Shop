import * as React from "react";
import Slider from "react-slick";

export interface ICarouselProps {
  types: Array<{ image: string; title: string }>;
}

export default function Carousel(props: ICarouselProps) {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {props?.types?.map((item, index) => {
          return (
            <div key={index}>
              <h3>
                <img
                  src={item.image}
                  alt={`image${index}`}
                  className="lazyloaded"
                />
                <span className="slick-title">{item.title}</span>
              </h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
