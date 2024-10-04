const CardMobile = ({
  pista,
  bandeira,
  dia,
  mes,
  cidade,
  corrida,
  cidadeEPrix,
  cidadePais,
  percurso,
}) => {
  return (
    <div className="relative h-[250px] p-2 w-full flex items-center justify-center">
      <img
        src={pista}
        alt="Pista"
        className="absolute top-0 left-0 z-10 h-full brightness-50"
      />
      <span className="z-20 relative h-full w-full flex items-center justify-center flex-col">
        <div className="flex gap-3 w-full text-white">
          <div className="flex flex-col items-center p-1 border-white border rounded-lg bg-[#0000004d] shadow-data-shadow">
            <p>{dia}</p>
            <p>{mes}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={bandeira} />
            <h2>{cidade}</h2>
          </div>
        </div>
        <img src={percurso} alt="pista" className="w-auto h-1/3" />
          <div className="flex flex-col gap-1 text-sm text-white justify-start w-full">
            <p>Temporada 10</p>
            <p>{corrida}</p>
            <p>{cidadeEPrix}</p>
            <p>{cidadePais}</p>
          </div>
      </span>
    </div>
  );
};

export default CardMobile;
