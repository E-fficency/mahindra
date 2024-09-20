import { useEffect, useState } from "react";
import GridTittle from "../../assets/grid-e/grid-e-tittle.svg";
import GridTittleWhite from "../../assets/grid-e/grid-e-tittle-darkmode.svg";
import GridECard from "./GridECard";

const GridE = () => {

  const [theme, setTheme] = useState('')

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if(theme === 'dark'){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  return (
    <section className=" border-b-black py-6 dark:border-b-white">
      <div className="flex flex-col items-center text-center gap-4">
        {theme == 'dark' ? <img src={GridTittle} /> : <img src={GridTittleWhite}/> }
        <p className="text-xl dark:text-white">Monte seu pódio e ganhe pontos em ligas personalizadas</p>
      </div>
      <GridECard/>
    </section>
  );
};

export default GridE;
