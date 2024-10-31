import { FaArrowUp } from "react-icons/fa6";

const Times = () => {
  return (
    <div className="flex items-center mb-8">
      <span className="mr-6 text-xl items-center gap-1 hidden sm:flex">
        3 <FaArrowUp color="green" />
      </span> 
      <span className="text-2xl mr-2 flex">1º</span>

      <div className="flex gap-4">
        <img
          className="rounded-full w-14 h-14"
          src="https://github.com/leotaschin.png"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-sm sm:text-xl font-medium">Java Formula E</h2>
          <h3 className="hidden sm:block">Leonardo C. Taschin</h3>
        </div>
      </div>
    </div>
  );
};

export default Times;
