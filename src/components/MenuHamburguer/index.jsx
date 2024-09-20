import { useState, useEffect } from 'react';
import LogoExtentida from '../../assets/logo/logo-expandida.svg'
import MenuHamburguerList from './MenuHamburguerList';
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";

const MenuHamburguer = () => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
      });

      const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
      };

      useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [theme]);

    return (  
        <>
            <aside className='flex flex-col bg-white shadow-grid-shadow absolute top-0 left-0 rounded-r-lg w-[313px] px-5 py-10 gap-4 h-full dark:bg-[#575757] z-10 hidden'>
                <div className='mb-5'>
                    <img src={LogoExtentida} alt="Logo extendida" />
                </div>
                <MenuHamburguerList/>
                <div className='absolute bottom-6  rounded-full p-2' onClick={toggleTheme}>
                    {theme === "light" ? <FiMoon size={30}/> : <IoSunnyOutline size={30} color='white'/>}
                </div>
            </aside>
        </>
    );
}
 
export default MenuHamburguer;