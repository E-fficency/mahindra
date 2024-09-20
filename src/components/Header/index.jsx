import MenuHamburguer from "../../assets/menu-hamburguer.svg"
import Logo from "../../assets/logo/logo.svg"
import User from "../../assets/user.svg"
import MenuHamburguerList from "../MenuHamburguer/MenuHamburguerList";

const Header = () => {

    return ( 
        <>
            <header>
                <nav className="flex justify-between py-5">
                    <img className="xl:hidden" src={MenuHamburguer} alt="Menu hamburguer" />
                    <img src={Logo} className="w-12" alt="Logo"/>
                    <div className="hidden xl:block">
                        <MenuHamburguerList/>
                    </div>
                    <img src={User} alt="Icone user"/>
                </nav>
            </header>
        </>
     );
}
 
export default Header;