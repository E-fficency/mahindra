import { useState, useEffect } from 'react';
import LogoExtentida from '../../assets/logo/logo-expandida.svg';
import MenuHamburguerList from './MenuHamburguerList';
import { FiMoon } from 'react-icons/fi';
import { IoSunnyOutline } from 'react-icons/io5';

const MenuHamburguer = ({ menuOpen, setMenuOpen }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={`${
          menuOpen ? 'left-0' : '-left-[100%]'
        } absolute top-0 transition-all bg-[#0000004f] w-full h-full z-9`}
      >
        &nbsp;
      </div>
      <aside
        className={`${
          menuOpen ? 'left-0' : '-left-[320px]'
        } flex flex-col bg-white shadow-grid-shadow absolute transition-all top-0 rounded-r-lg w-[313px] px-5 py-10 gap-4 h-full dark:bg-[#575757] z-10`}
      >
        <div className="mb-5">
          <img src={LogoExtentida} alt="Logo extendida" />
        </div>
        <span className="xl:hidden">
          <MenuHamburguerList />
        </span>
        <div
          className="absolute bottom-6  rounded-full p-2"
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <FiMoon size={30} />
          ) : (
            <IoSunnyOutline size={30} color="white" />
          )}
        </div>
      </aside>
    </>
  );
};

export default MenuHamburguer;
