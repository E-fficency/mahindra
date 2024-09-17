import MenuHamburguer from "../../assets/menu-hamburguer.svg"
import Logo from "../../assets/logo.svg"
import User from "../../assets/user.svg"

const Header = () => {
    return ( 
        <>
            <header>
                <nav className="flex justify-between px-4 py-5">
                    <img src={MenuHamburguer} alt="Menu hamburguer"/>
                    <img src={Logo} className="w-12" alt="Logo"/>
                    <img src={User} alt="Icone user"/>
                </nav>
            </header>
        </>
     );
}
 
export default Header;