import User from "../../../assets/user.svg";
import { IoIosHeart } from "react-icons/io";

const GridECard = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#B1BDC5] rounded-lg shadow-grid-shadow mt-7 p-7 w-full xl:w-auto dark:bg-[#B1BDC5]">
      <img className="w-32 bg-white rounded-full p-6" src={User} />
      <h2 className="font-bold text-xl mt-3">User</h2>
      <span className="flex items-center gap-1">
        <IoIosHeart color="red" />
        <p className="text-[#0000008A]">Mahindra Racing</p>
      </span>

      <div className="flex gap-5 text-center bg-[#E6E3DE] rounded-lg py-1 px-8 my-5">
        <div>
          <h4 className="text-xl">Rodada</h4>
          <p className="text-green-500 font-bold text-xl">+5</p>
        </div>
        <div>
          <h4 className="text-xl">Total</h4>
          <p className="font-bold text-xl">94</p>
        </div>
      </div>

      <button className="py-3 px-9 text-white font-bold text-xl bg-text-gradient rounded-md hover:opacity-80">Ver perfil</button>
    </div>
    
  );
};

export default GridECard;
