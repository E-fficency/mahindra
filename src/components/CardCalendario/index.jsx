import CardCalendarioImagem from "../../assets/card-calendario.svg";
import BrFlag from "../../assets/flags/br.svg";

const CardCalendario = () => {
  return (
    <>
      <div className="flex rounded-3xl border justify-between border-black xl:justify-normal w-fit dark:border-white ">
        <div className="flex flex-col p-4 gap-2 rounded-l-2xl dark:text-white bg-[#8b8b8b3b]">
          <div className="flex flex-col rounded-lg border items-center w-[50px] border-black font-bold dark:border-white ">
            <p>07</p>
            <p className="text-[#112BDC] dark:text-[#576dff]">DEZ</p>
          </div>
          <div className="flex gap-5 items-center font-bold text-xl border-b border-black pb-3 dark:border-white">
            <img src={BrFlag} />
            <h2>São Paulo</h2>
          </div>
          <div>
            <h3 className="text-xl font-medium ">Rodada 1</h3>
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
