import { Swiper, SwiperSlide } from "swiper/react";
import cards from '../../mocks/cards'

const CardsSlider = () => {
  return (
    <Swiper>
      {cards.map((card) => (
        <SwiperSlide>{card}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardsSlider;
