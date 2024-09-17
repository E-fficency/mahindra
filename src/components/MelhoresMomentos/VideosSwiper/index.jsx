import { Swiper, SwiperSlide } from "swiper/react";
import videos from '../../../mocks/melhoresMomentos'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const VideosSwiper = () => {
    return (  
        <>
            <Swiper slidesPerView={1} spaceBetween={50} navigation>
                {videos.map((video) => (
                    <SwiperSlide key={video.id}>
                       <iframe className="rounded-xl" width="350" height="355" src={video.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
 

export default VideosSwiper;