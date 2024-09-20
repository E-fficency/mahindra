import imgMenu from '../../assets/menu-hamburguer.svg';
import Logo from '../../assets/logo/logo.svg';
import User from '../../assets/user.svg';
import { useEffect, useState } from 'react';
import MenuHamburguer from '../MenuHamburguer';
import MenuHamburguerList from '../MenuHamburguer/MenuHamburguerList';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const components = [
    // eslint-disable-next-line react/jsx-key
    <MenuHamburguer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />,
    // eslint-disable-next-line react/jsx-key
    <MenuHamburguerList />,
  ];
  const [componentShow, setComponentShow] = useState(components[0]);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setComponentShow(components[1]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  window.addEventListener('resize', function () {
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
            to={'/'}
            className="w-12 flex items-center justify-center hover:opacity-60 transition-all cursor-pointer"
          >
            <img src={Logo} alt="Logo" />
          </Link>
          {componentShow}
          <button className="hover:opacity-60 transition-all">
            <img src={User} alt="Icone user" />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
