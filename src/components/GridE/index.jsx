import GridTtittle from "../../assets/grid-e/grid-e-tittle.svg";
import GridECard from "./GridECard";

const GridE = () => {
  return (
    <section className="border-y border-b-black py-6">
      <div className="flex flex-col items-center text-center gap-4">
        <img src={GridTtittle} />
        <p className="text-xl">Monte seu pódio e ganhe pontos em ligas personalizadas</p>
      </div>
      <GridECard/>
    </section>
  );
};

export default GridE;
