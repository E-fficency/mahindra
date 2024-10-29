import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

import JordanKing from "../../../assets/Times FE/MAHINDRA/Jordan King.png";

function Destaque() {
  return (
    <div className="w-full max-w-[300px] mx-auto overflow-hidden"> 
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]} 
        loop={true}
      >
        <SwiperSlide>
          <div className="rounded-lg shadow-md border border-[#00000030] dark:border-white dark:border-opacity-50  mt-7 pt-4 flex flex-col align-bottom min-h-[400px] max-h-[400px]">
            <div className="h-full flex flex-col text-center">
              <h2 className="font-semibold">Volta mais rápida</h2>
              <h3>Jordan King</h3>
              <p>Mahindra</p>
              <div className="flex p-4 cardisgraca">
                <img
                  className="bg-clip-content object-contain w-full h-full"
                  src={JordanKing}
                  alt="Jordan King"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-lg shadow-md border border-[#00000030] dark:border-white dark:border-opacity-50 mt-7 pt-4 flex flex-col align-bottom min-h-[400px] max-h-[400px]">
            <div className="h-full flex flex-col text-center">
              <h2 className="font-semibold">Volta mais rápida</h2>
              <h3>Jordan King</h3>
              <p>Mahindra</p>
              <div className="flex p-4 cardisgraca">
                <img
                  className="bg-clip-content object-contain w-full h-full"
                  src={JordanKing}
                  alt="Jordan King"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-lg shadow-md border border-[#00000030] dark:border-white dark:border-opacity-50 mt-7 pt-4 flex flex-col align-bottom min-h-[400px] max-h-[400px]">
            <div className="h-full flex flex-col text-center">
              <h2 className="font-semibold">Volta mais rápida</h2>
              <h3>Jordan King</h3>
              <p>Mahindra</p>
              <div className="flex p-4 cardisgraca">
                <img
                  className="bg-clip-content object-contain w-full h-full"
                  src={JordanKing}
                  alt="Jordan King"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
}

export default Destaque;
