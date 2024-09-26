import CardPiloto from "../../components/CardPiloto";


const Pilotos = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-10 pb-5 border-b-black border-b dark:border-white">
        <h1 className="font-semibold text-4xl dark:text-white ">Pilotos</h1>
        <p className="font-light text-lg dark:text-white ">Confira os pilotos da temporada</p>
      </div>

      <CardPiloto/>
    </>
  );
};

export default Pilotos;
