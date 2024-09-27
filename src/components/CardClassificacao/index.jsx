import GeFlag from "../../assets/flags/ge.svg";
import Time from  "../../assets/Times FE/TAG HEUER PORSCHE/TAG HEUER PORSCHE.svg"
import Pascal from "../../assets/Times FE/TAG HEUER PORSCHE/Pascal Wehrlein.png";

const CardClassificacao = () => {
  return (
    <>
      <div className="flex justify-between py-2 border-gray-900 border-b border-opacity-20 dark:border-opacity-95 xl:border-y xl:border-gray-900">
        
        <div className="flex items-center gap-4 ">

          <div className="border-r-2 border-[#D80027] pr-3 py-1 xl:border-r-4">
            <h2 className="font-medium text-5xl dark:text-white xl:text-6xl xl:font-extrabold">1</h2>
          </div>

          <div className="flex w-[60%] gap-2 xl:auto xl:gap-4">
            <img src={Pascal} className="w-[70px] xl:w-[200px]" />

            <div className="flex flex-col gap-2 py-2 w-[100%]">
              <img src={GeFlag} className="w-[20px] xl:w-[50px]" />
              <p className="dark:text-white xl:text-2xl">Pascal Wehrlein</p>
            </div>
          </div>

        </div>

        <div className="hidden xl:flex xl:w-1/4 border-x border-gray-800 justify-center">
          <img src={Time}  className="w-1/2"/>
        </div>

        <div className="xl:flex xl:items-center xl:p-6 xl:w-1/4 xl:justify-center">
          <h2 className="font-medium text-5xl dark:text-white xl:text-6xl xl:font-extrabold">198</h2>
        </div>

      </div>
    </>
  );
};

export default CardClassificacao;
