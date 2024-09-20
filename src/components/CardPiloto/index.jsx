import Br from '../../assets/flags/br.svg';
import NicoMuller from '../../assets/Times FE/ABT/Lucas Di Grassi.png';
import ABT from '../../assets/times/abt.svg';

const CardPiloto = ({ nome, sobrenome, bandeira }) => {
  return (
    // ainda vou fazer o mock com os nomes e bandeiras
    <>
      <section className="flex flex-col items-center justify-center border-y border-b-black py-6 dark:border-b-white">
        <img src={ABT} width={'150px'} />
        <div className="cursor-pointer flex flex-col pt-10 overflow-clip cardisgraca items-center text-center rounded-lg px-3">
          <div className="flex flex-col items-center textos">
            <img src={Br} width={'25px'} />
            <h2 className="font-medium text-2xl dark:text-white">LUCAS</h2>
            <h2 className="font-medium text-[#5073F1] text-2xl">DI GRASSI</h2>
          </div>
          <div className="ibagem">
            <img src={NicoMuller} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardPiloto;
