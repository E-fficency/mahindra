import Model from "../../assets/sherek-provisório.webp";
import { FiArrowRight } from "react-icons/fi";

const FuturoVelocidade = () => {
  return (
    <>
    <section className="flex flex-col mt-7 px-5 xl:flex-row gap-8 justify-center">
      <div className="flex flex-col gap-3 ">
        <h1 className="uppercase font-bold text-3xl flex flex-col">
          <span className="text-transparent bg-clip-text bg-text-gradient mb-1">O futuro</span> da velocidade
        </h1>
        <a href="#" className="text-2xl flex items-center">
          <h2 className="uppercase flex items-center gap-2 font-semibold mb-7">Saiba mais <FiArrowRight size={'28'}/></h2>
        </a>
      </div>
        <div>
          <img src={Model} alt="Modelo 3d de carro de Formula E" />
        </div>
    </section>
    </>
  );
};

export default FuturoVelocidade;
