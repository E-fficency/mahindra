import CardClassificacao from "../../components/CardClassificacao";
import { MdInfo } from "react-icons/md";

const Classificacao = () => {
  return (
    <>
      <section className="border-b border-b-black p-6">
        <div className="flex flex-col justify-center items-center text-center gap-2 border-b py-5">
          <h1 className="text-4xl font-semibold">Classificação</h1>
          <p className="text-xl font-light">Acompanhe a tabela da temporada</p>
          <div className="flex items-center w-[300px] justify-around font-semibold text-2xl bg-black bg-opacity-[20%] op p-2 rounded-lg mt-1 border border-black cursor-pointer">
            <MdInfo />
            <p>Sobre A Pontuação</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between uppercase py-5 font-medium">
            <h3>Pilotos</h3>
            <h3>Pontuações</h3>
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
