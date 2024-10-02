import cards from "../../mocks/cards";
import CardCorrida from "../CardCorrida";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const CardsSlider = () => {

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

      <div className="w-full h-[400px] flex items-center justify-between relative">
        {cards.map((card, index) => (
          <CardCorrida {...card} key={index} />
        ))}
      </div>
    </section>
  );
};

export default CardsSlider;
