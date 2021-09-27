import React, { FC, ReactNode } from 'react';
import 'swiper/swiper.min.css';
import { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as Swipe, Navigation, Mousewheel } from 'swiper';

interface CarouselSwiperProps extends SwiperOptions {
  slides: ReactNode[];
}

Swipe.use([Navigation, Mousewheel]);

const CarouselSwiper: FC<CarouselSwiperProps> = ({ slides, ...rest }) => {
  return (
    <Swiper
      mousewheel={{
        sensitivity: 0.5,
      }}
      {...rest}
    >
      {slides.map((slide: any, index: number) => {
        return <SwiperSlide key={`swiper-slide-${index}`}>{slide}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default CarouselSwiper;
