import { Carroca } from "../ModeloCarro";

const FuturoVelocidade = () => {
  return (
    <>
    <section className="flex flex-col mt-7 xl:justify-center gap-8 dark:text-white">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="uppercase font-bold text-3xl flex flex-col xl:text-4xl">
          <span className="text-transparent bg-clip-text bg-text-gradient mb-1">O futuro</span> da velocidade
        </h1>
      </div>
        <div className="flex justify-center">
          <Carroca />
        </div>
    </section>
    </>
  );
};

export default FuturoVelocidade;
