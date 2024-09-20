import Br from "../../assets/flags/br.svg";
import NicoMuller from "../../assets/pilotos/nico.svg";
import ABT from '../../assets/times/abt.svg'

const CardPiloto = ({ nome, sobrenome, bandeira }) => {
  return (
    // ainda vou fazer o mock com os nomes e bandeiras
    <>
      <section className="flex flex-col items-center justify-center border-y border-b-black py-6 dark:border-b-white">
        <img src={ABT} width={'150px'}/>
        <div className="flex flex-col mt-10 items-center text-center bg-pilot-gradient rounded-lg px-3 transition-all duration-500 hover:bg-pilot-gradient-hover ">
          <div className="flex flex-col items-center">
            <img src={Br} width={"25px"} />
            <h2 className="font-medium text-2xl dark:text-white">LUCAS</h2>
            <h2 className="font-medium text-[#5073F1] text-2xl">DI GRASSI</h2>
          </div>
          <div>
            <img src={NicoMuller} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardPiloto;
