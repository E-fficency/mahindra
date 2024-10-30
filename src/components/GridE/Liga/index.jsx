import Pontos from "../Pontos";
import Times from "../Times";
import { FaArrowDown } from "react-icons/fa6";

const Liga = () => {
  return (
    <div className="rounded-lg shadow-md border border-[#00000030] dark:border-white dark:border-opacity-50 mt-7 p-7 min-h-[400px] max-h-[400px] overflow-auto">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            className="rounded-full w-16 h-16"
            src="https://github.com/leotaschin.png"
          />
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-2xl">E-Fficiency Formula E Team</h2>
            <h3>Leonardo C. Taschin</h3>
          </div>
        </div>
        <div>
          <h3>Ranking</h3>
          <div className="flex items-center gap-2"> 
            <FaArrowDown color="red"/>
            <span>8º</span>
          </div>
        </div>
      </div>

      <div className="min-h-10 mt-10">
        <div className="grid grid-cols-[2fr_0.5fr_0.5fr_0.5fr] gap-4">

          <div className="flex flex-col ">
            <h3 className="mb-6 text-2xl">Times</h3>
            <Times />
            <Times />
            <Times />
          </div>

          <div className="flex flex-col items-center">
            <Pontos titulo="Pontos" pontos="50" />
            <Pontos pontos="50" />
            <Pontos pontos="50" />
          </div>

          <div className="flex flex-col items-center">
            <Pontos titulo="Vitórias" pontos="50" />
            <Pontos pontos="50" />
            <Pontos pontos="50" />
          </div>

          <div className="flex flex-col items-center">
            <Pontos titulo="Saldo" pontos="50" />
            <Pontos pontos="50" />
            <Pontos pontos="50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liga;
