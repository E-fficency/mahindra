import { useEffect, useState } from 'react';
import cards from '../../mocks/cards';
import CardCorrida from '../CardCorrida';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardMobile from '../CardCorrida/Mobile';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CardsSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window.innerWidth]);

  return (
    <section className="my-6 border-y py-5 border-black text-black dark:border-white">
      <div className="flex flex-col justify-center text-center mb-4 gap-2 dark:text-white">
        <div className="flex items-center justify-center gap-2">
          <h1 className="flex text-[2rem] font-semibold justify-center ">
            Próximas corridas
          </h1>
          <MdKeyboardDoubleArrowRight size={35} />
        </div>
        <p className="text-xl">
          Conheça as próximas provas da temporada <b>24/25</b>
        </p>
      </div>

      {isMobile ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          loop
          autoplay
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <CardMobile {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="w-full h-[400px] flex items-center justify-between relative">
          {cards.map((card, index) => (
            <CardCorrida {...card} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CardsSlider;
