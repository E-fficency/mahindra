import JordanKing from "../../../assets/Times FE/MAHINDRA/Jordan King.png";


function Destaque() {
  return (
    <>
      <div className="rounded-lg shadow-md border border-[#00000030] mt-7 p-7 h-full flex flex-col align-bottom">
        <div className="h-full flex flex-col text-center">
          <h2>Volta mais rápida</h2>
          <h3>Nome</h3>
          <p>Time</p>

          <img src={JordanKing} alt="" />
        </div>

      </div>
    </>
  );
}

export default Destaque;
