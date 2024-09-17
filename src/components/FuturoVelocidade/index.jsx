import Model from "../../assets/sherek-provisório.webp";

const FuturoVelocidade = () => {
  return (
    <>
    <section className="flex flex-col mt-7 xl:flex-row gap-8">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="uppercase font-bold text-3xl flex flex-col">
          <span className="text-transparent bg-clip-text bg-text-gradient mb-1">O futuro</span> da velocidade
        </h1>
      </div>
        <div>
          <img src={Model} alt="Modelo 3d de carro de Formula E" />
        </div>
    </section>
    </>
  );
};

export default FuturoVelocidade;
