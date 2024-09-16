import MenuHamburguer from "../../assets/menu-hamburguer.svg"
import LogoBlack from "../../assets/logo-black.svg"
import User from "../../assets/user.svg"

const Header = () => {
    return ( 
        <>
            <header>
                <nav className="flex justify-between px-4 py-5">
                    <img src={MenuHamburguer} alt="Menu hamburguer"/>
                    <img src={LogoBlack} alt="Logo"/>
                    <img src={User} alt="Icone user"/>
                </nav>
            </header>
        </>
     );
}
 
export default Header;