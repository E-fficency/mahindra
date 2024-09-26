import imgMenu from "../../assets/menu-hamburguer.svg";
import Logo from "../../assets/logo/logo.svg";
import User from "../../assets/user.svg";
import { useEffect, useState } from "react";
import MenuHamburguer from "../MenuHamburguer";
import MenuHamburguerList from "../MenuHamburguer/MenuHamburguerList";
import { Link } from "react-router-dom";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";

const Header = () => {
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

  const [menuOpen, setMenuOpen] = useState(false);
  const components = [
    <MenuHamburguer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />,
    <MenuHamburguerList />,
  ];
  const [componentShow, setComponentShow] = useState(components[0]);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setComponentShow(components[1]);
    }
  }, [window.innerWidth]);

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      setComponentShow(components[1]);
    } else {
      setComponentShow(components[0]);
    }
  });

  return (
    <>
      <header>
        <nav className="flex justify-between items-center py-5">
          <button className="xl:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={imgMenu} alt="Menu hamburguer" />
          </button>
          <Link
            to={"/"}
            className="w-12 flex items-center justify-center hover:opacity-60 transition-all cursor-pointer"
          >
            <img src={Logo} alt="Logo" />
          </Link>
          {componentShow}
          <div className="flex items-center gap-1">
            <button className="hover:opacity-60 transition-all">
              <Link to={"/perfil"}>
                <img src={User} alt="Icone user" />
              </Link>
            </button>
            <button
              className="cursor pointer rounded-full p-2"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <FiMoon size={30} />
              ) : (
                <IoSunnyOutline size={30} color="white" />
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
