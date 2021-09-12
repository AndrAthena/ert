import React, { FC, ReactNode } from 'react';
import 'swiper/swiper.min.css';
import { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';

interface CarouselSwiperProps extends SwiperOptions {
  slides: ReactNode[];
}

const CarouselSwiper: FC<CarouselSwiperProps> = ({ slides, ...rest }) => {
  return (
    <Swiper {...rest}>
      {slides.map((slide: any, index: number) => {
        return <SwiperSlide key={`swiper-slide-${index}`}>{slide}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default CarouselSwiper;
