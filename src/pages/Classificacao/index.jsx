import CardClassificacao from "../../components/CardClassificacao";
import { MdInfo } from "react-icons/md";

const Classificacao = () => {
  return (
    <>
      <section className="py-5">
        <div className="flex flex-col justify-center items-center text-center gap-2 py-5 border-b border-black dark:border-white">
          <h1 className="text-4xl font-semibold dark:text-white">Classificação</h1>
          <p className="text-xl font-light dark:text-white">Acompanhe a tabela da temporada</p>
          <div className="xl:hidden flex items-center w-[300px] justify-around font-semibold text-2xl bg-black bg-opacity-[20%] op p-2 rounded-lg mt-1 border border-black cursor-pointer dark:text-white">
            <MdInfo />
            <p>Sobre A Pontuação</p>
          </div>
        </div>
        <div>

          <div className="flex justify-between items-center uppercase py-5 font-medium xl:justify-normal xl:gap-6 dark:text-white">

            <div className="w-full xl:justify-between xl:flex xl:gap-6 xl:flex-col xl:w-[80%]">

              <div className="flex xl:justify-normal xl:gap-6 justify-between">
                <h3 className="linkes">Pilotos</h3>
                <h3 className="linkes">Pontuações</h3>
              </div>

              <div className="hidden xl:block text-4xl font-bold" >
                <h2>2023/2024</h2>
              </div>
            </div>

            <div className="hidden xl:flex items-center w-[300px] justify-around font-semibold text-2xl bg-black bg-opacity-[10%] op p-2 rounded-lg mt-1 border border-black cursor-pointer dark:text-white capitalize">
                <MdInfo />
                <p>Sobre A Pontuação</p>
              </div>
          </div>

          <CardClassificacao />
          <CardClassificacao />
          <CardClassificacao />
          <CardClassificacao />
        </div>
      </section>
    </>
  );
};

export default Classificacao;
