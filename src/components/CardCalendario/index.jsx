import CardCalendarioImagem from "../../assets/card-calendario.svg";
import BrFlag from "../../assets/flags/br.svg";

const CardCalendario = () => {
  return (
    <>
      <div className="flex rounded-3xl border border-black ">
        <div className="flex flex-col p-4 gap-2">
          <div className="flex flex-col rounded-lg border items-center border-black px-3 font-bold mb-4">
            <p>07</p>
            <p className="text-[#112BDC]">DEZ</p>
          </div>
          <div className="flex gap-5 items-center font-bold text-xl border-b border-black pb-3">
            <img src={BrFlag} />
            <h2>São Paulo</h2>
          </div>
          <div>
            <h3 className="text-xl font-medium">Rodada 1</h3>
          </div>
        </div>

        <div>
          <img className="rounded-r-3xl " src={CardCalendarioImagem} />
        </div>
      </div>
    </>
  );
};

export default CardCalendario;
