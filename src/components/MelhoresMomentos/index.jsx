import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import VideosSwiper from "./VideosSwiper";


const MelhoresMomentos = () => {
  return (
      <section className="py-8 border-y border-b-black dark:border-white text-white">
        <div className="flex items-center justify-center gap-1 pb-5">
          <h1 className="flex text-[2rem] font-semibold ">Melhores momentos</h1>
          <MdKeyboardDoubleArrowRight size={35} className="mt-2"/>
        </div>
        <VideosSwiper/>
      </section>
  );
};

export default MelhoresMomentos;
