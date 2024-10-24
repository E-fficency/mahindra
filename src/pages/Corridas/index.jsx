import CardCalendario from "../../components/CardCalendario";

const Corridas = () => {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center text-center text-black gap-2 border-b border-b-black py-5 dark:border-white">
          <h1 className="text-3xl font-semibold dark:text-white">Temporada 11</h1>
          <p className="text-xl font-light dark:text-white">O calendário da nova temporada ja está disponível, confira as próximas corridas.</p>
        </div>
            <h2 className="flex justify-center font-bold text-2xl py-5 dark:text-white">Calendário corrida 2024/2025</h2>
        <div className="flex flex-wrap gap-12 justify-center">
            <CardCalendario/>
            <CardCalendario/>
            <CardCalendario/>
            <CardCalendario/>
            <CardCalendario/>
            <CardCalendario/>
            <CardCalendario/>
            <CardCalendario/>
        </div>
      </section>
    </>
  );
};

export default Corridas;
