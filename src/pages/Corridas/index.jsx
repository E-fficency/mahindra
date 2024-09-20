import CardCalendario from "../../components/CardCalendario";

const Corridas = () => {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center text-center gap-2 border-b border-b-black py-5">
          <h1 className="text-3xl font-semibold">Temporada 11</h1>
          <p className="text-xl font-light ">O calendário da nova temporada ja está disponível, confira as próximas corridas.</p>
        </div>
        <div>
            <h2 className="font-bold text-2xl py-5">Calendário corrida 2024/2025</h2>
            <CardCalendario/>
        </div>
      </section>
    </>
  );
};

export default Corridas;
