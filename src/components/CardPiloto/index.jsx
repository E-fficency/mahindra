import times from "../../mocks/pilotos"; // Certifique-se de que o mock está importado corretamente

const CardPiloto = () => {
  return (
    <>
      {times.map((time, index) => (
        <section key={index} className="flex flex-col items-center justify-center border-y border-b-black py-6 dark:border-b-white">
          {/* Logo do Time */}
          <div>
            <img src={time.time} width={"150px"} alt={`Logo do time ${time.time}`} />
          </div>

          <div className="flex flex-col gap-10 xl:flex-row">
          {time.piloto.map((piloto, index) => (
            <div key={index} className="cursor-pointer flex flex-col pt-10 overflow-clip cardisgraca items-center text-center rounded-lg px-3">
              <div className="flex flex-col items-center textos">
                {/* Banderinha nacionalidade */}
                <img src={piloto.nacionalidade} width={"25px"} className="pb-2" />
                {/* Nome do Piloto */}
                <h2 className="font-medium text-2xl dark:text-white">{piloto.nome}</h2>
                <h2 className="font-medium text-[#5073F1] text-2xl">{piloto.sobrenome}</h2>
              </div>
              <div className="ibagem">
                  {/* Foto do piloto */}
                {<img src={piloto.fotoPiloto} alt={`Foto de ${piloto.nome}`} /> }
              </div>
            </div>
          ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default CardPiloto;
