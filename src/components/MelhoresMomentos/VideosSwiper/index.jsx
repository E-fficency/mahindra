import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import melhoresMomentos from '../../../mocks/melhoresMomentos';

import 'swiper/css';
import 'swiper/css/navigation';


const VideosSwiper = () => {
  return (
    <Swiper 
      navigation={true} 
      modules={[Navigation]} 
      className="w-full"
    >
      {melhoresMomentos.map((video, index) => (
        <SwiperSlide key={index++}>
          <iframe
            className="rounded-xl m-auto"
            width="90%"
            height="350"
            src={video.link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideosSwiper;
