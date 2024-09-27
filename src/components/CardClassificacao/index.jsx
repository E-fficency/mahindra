import GeFlag from "../../assets/flags/ge.svg";
import Pascal from "../../assets/Times FE/TAG HEUER PORSCHE/Pascal Wehrlein.png";

const CardClassificacao = () => {
  return (
    <>
      <div className="flex justify-between items-center py-2 border-gray-900 border-b border-opacity-20 dark:border-opacity-95 ">
        <div className="border-r-2 border-[#D80027] pr-3 py-1">
          <h2 className="font-medium text-5xl dark:text-white">1</h2>
        </div>
        <div className="flex w-[60%] gap-2 ">
          <img src={Pascal} width={"70px"} />
          <div className="flex flex-col gap-2 py-2 w-[100%]">
            <img src={GeFlag} width={"20px"} />
            <p className="max-w-[70%] overflow-hidden dark:text-white">Pascal Wehrlein</p>
          </div>
        </div>
        <h2 className="font-medium text-5xl dark:text-white">198</h2>
      </div>
    </>
  );
};

export default CardClassificacao;
