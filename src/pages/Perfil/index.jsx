import User from "../../assets/user.svg";
import { FaEdit, FaHeart, FaRegShareSquare } from "react-icons/fa";


const Perfil = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center dark:text-white">
        <h1 className="font-medium text-3xl mb-5">Perfil</h1>
        <div>
          <img src={User} className="border-black border rounded-full p-4 w-[100px] dark:bg-white"/>
        </div>
        <div className="flex flex-col items-center w-full py-5">
            <h2 className="font-medium text-3xl">Seu nome</h2>
            <p className="font-light">@userformulaE</p>
            <h4 className="font-light text-xs">Conta criada em 2024</h4>
        </div>
        <div className="py-8 flex flex-col items-center border-y border-black w-full dark:border-white">
            <h2 className="flex items-center gap-4 text-3xl font-medium">Sobre <FaEdit color="gray"/></h2>

            <div className="mt-5 flex flex-col items-center gap-3">
                <h3 className="text-2xl font-medium">Equipe favorita:</h3>
                <p className="flex items-center gap-2 text-xl"><FaHeart color="red"/> Mahindra Racing</p>
            </div>

            <div className="mt-5 flex flex-col items-center gap-3">
                <h3 className="text-2xl font-medium">Piloto favorito:</h3>
                <p className="flex items-center gap-2 text-xl"><FaHeart color="red"/> Lucas Di Grassi</p>
            </div>
        </div>
            <div className="py-8 flex flex-col gap-5 items-center">
                <h2 className="font-medium text-3xl">Amigos</h2>
                <p className="text-center w-3/4 text-xl">Você ainda não tem nenhum amigo compartilhe seu link e se conecte com eles.</p>
            </div>
            <button className="flex items-center gap-4 bg-black px-4 py-2 rounded-lg text-2xl text-white">Compartilhar ID <FaRegShareSquare /></button>
      </div>
    </>
  );
};

export default Perfil;
