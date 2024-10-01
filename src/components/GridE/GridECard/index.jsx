import User from "../../../assets/user.svg";
import { IoIosHeart } from "react-icons/io";

const GridECard = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#00000003] rounded-lg shadow-md border border-[#00000030] mt-7 p-7 w-full xl:w-auto dark:bg-[#00000034] dark:text-white">
      <img className="w-32 bg-white rounded-full p-6" src={User} />
      <h2 className="font-bold text-xl mt-3">User</h2>
      <span className="flex items-center gap-1">
        <IoIosHeart color="red" />
        <p className="text-[#0000008A] dark:text-white">Mahindra Racing</p>
      </span>

      <div className="flex gap-5 text-center bg-[#fff] dark:text-white dark:bg-[#00000030] border border-[#00000030] rounded-lg py-1 px-8 my-5">
        <div>
          <h4 className="text-xl">Rodada</h4>
          <p className="text-green-500 dark:text-green-300 font-bold text-xl">+5</p>
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
