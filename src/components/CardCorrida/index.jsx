import "./style.css";

const CardCorrida = ({ pista, bandeira, dia, mes, cidade, corrida, cidadeEPrix, cidadePais, percurso }) => {
  return (
    <div className="card">
      <img src={pista} alt="Pista" className="bg-card" />
      <img src={bandeira} alt="Bandeira" className="bandeira" />
      <div className="info">
        <div className="absolute flex top-5 left-5 gap-3 w-full ">
          <div className="flex flex-col items-center p-1 border-white border rounded-lg bg-[#0000004d] shadow-data-shadow">
            <p>{dia}</p>
            <p>{mes}</p>
          </div>
          <div className="flex items-center gap-2  ">
            <img src={bandeira} />
            <h2>{cidade}</h2>
          </div>
        </div>
        <div className="absolute bottom-10 left-5">
          <div className="flex flex-col gap-2 ">
            <p>Temporada 10</p>
            <p>{corrida}</p>
            <p>{cidadeEPrix}</p>
            <p>{cidadePais}</p>
          </div>
        </div>
      <img src={percurso} alt="pista" className="absolute left-1/4 top-1/3 w-[60%]" />
      </div>
    </div>
  );
};

export default CardCorrida;
