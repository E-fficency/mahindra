import MenuHamburguer from "../../assets/menu-hamburguer.svg"
import Logo from "../../assets/logo.svg"
import User from "../../assets/user.svg"

const Header = () => {
    return ( 
        <>
            <header>
                <nav className="flex justify-between px-4 py-5">
                    <img src={MenuHamburguer}/>
                    <img src={Logo}/>
                    <img src={User}/>
                </nav>
            </header>
        </>
     );
}
 
export default Header;