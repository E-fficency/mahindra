import { useEffect, useState } from "react";
import GridTittle from "../../assets/grid-e/grid-e-tittle.svg";
import GridTittleWhite from "../../assets/grid-e/grid-e-tittle-darkmode.svg";
import GridECard from "./GridECard";
import GridCardUser from "./GridLigaCard";
import GridETabelaCard from "./GridETabelaCard";

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
    <section className=" py-6 ">
      <div className="flex flex-col items-center text-center gap-4">
        {theme == 'dark' ? <img src={GridTittleWhite} /> : <img src={GridTittle}/> }
        <p className="text-xl dark:text-white">Monte seu pódio e ganhe pontos em ligas personalizadas</p>
      </div>
      <div className="flex flex-col justify-between xl:flex-row">
        <GridECard/>
        <GridCardUser/>
        <GridETabelaCard/>
      </div>
    </section>
  );
};

export default GridE;
