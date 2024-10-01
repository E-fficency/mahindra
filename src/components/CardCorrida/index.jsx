import './style.css'

const CardCorrida = ({ pista, bandeira }) => {
  return (
    <div className="card">
      <img src={pista} alt="" className="bg-card" />
      <img src={bandeira} alt="" className="bandeira" />
    </div>
  )
};

export default CardCorrida;
