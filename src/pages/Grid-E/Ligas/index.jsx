import GridECard from "../../../components/GridE/GridECard";
import Liga from "../../../components/GridE/Liga";
import Destaque from "../Destaque";

function Ligas() {
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr_1fr] w-full gap-10 items-center justify-between">
        <div>
          <div className="text-center">
            <h2 className="font-semibold text-3xl">Seu perfil</h2>
            <p>Confira seus pontos</p>
          </div>
          <GridECard />
        </div>

        <div className="h-full">
          <div className="text-center">
            <h2 className="font-semibold text-3xl">Liga FIAP</h2>
            <p>Confira a pontuação de seus amigos</p>
          </div>
          <Liga />
        </div>

        <div className="h-full">
          <div className="text-center">
            <h2 className="font-semibold text-3xl">Dicas</h2>
            <p>Destaques da semana</p>
          </div>
          <Destaque />
        </div>

      </div>
    </>
  );
}

export default Ligas;
