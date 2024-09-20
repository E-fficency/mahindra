import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MenuHamburguerList = () => {
  return (
    <>
      <div className="border-y border-black py-7 xl:border-none dark:border-white">
        <ul className="flex flex-col justify-start items-start list-none w-full gap-5 xl:flex-row">
          <li className="w-full">
            <Link className="custom-item dark:text-white">
              Grid-E
              <div className="xl:hidden">
                <FaArrowRight />
              </div>
            </Link>
          </li>
          <li className="w-full">
            <Link className="custom-item dark:text-white">
              Equipes
              <div className="xl:hidden">
                <FaArrowRight />
              </div>
            </Link>
          </li>
          <li className="w-full">
            <Link to={'/pilotos'} className="custom-item dark:text-white">
              Pilotos
              <div className="xl:hidden">
                <FaArrowRight />
              </div>
            </Link>
          </li>
          <li className="w-full">
            <Link className="custom-item dark:text-white">
              Corridas
              <div className="xl:hidden">
                <FaArrowRight />
              </div>
            </Link>
          </li>
          <li className="w-full">
            <Link className="custom-item dark:text-white">
              Classificação
              <div className="xl:hidden">
                <FaArrowRight />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuHamburguerList;
