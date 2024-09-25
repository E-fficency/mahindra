import CardClassificacao from "../../components/CardClassificacao";
import { MdInfo } from "react-icons/md";

const Classificacao = () => {
  return (
    <>
      <section className="border-b border-b-black py-5">
        <div className="flex flex-col justify-center items-center text-center gap-2 border-b py-5 ">
          <h1 className="text-4xl font-semibold dark:text-white">Classificação</h1>
          <p className="text-xl font-light dark:text-white">Acompanhe a tabela da temporada</p>
          <div className="flex items-center w-[300px] justify-around font-semibold text-2xl bg-black bg-opacity-[20%] op p-2 rounded-lg mt-1 border border-black cursor-pointer dark:text-white">
            <MdInfo />
            <p>Sobre A Pontuação</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between uppercase py-5 font-medium dark:text-white">
            <h3 className="linkes">Pilotos</h3>
            <h3 className="linkes">Pontuações</h3>
          </div>
          <CardClassificacao />
          <CardClassificacao />
          <CardClassificacao />
        </div>
      </section>
    </>
  );
};

export default Classificacao;
