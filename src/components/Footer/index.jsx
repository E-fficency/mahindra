import Logo from "../../assets/logo/logo.svg"
import Snapchat from "../../assets/icons_footer/Snapchat.svg";
import Instagram from "../../assets/icons_footer/Instagram.svg";
import Twitter from "../../assets/icons_footer/TwitterX.svg";
import Facebook from "../../assets/icons_footer/Facebook.svg";
import TikTok from "../../assets/icons_footer/TikTok.svg";

const Footer = () => {
    return (
      <>
        <footer className="flex flex-col items-center justify-between py-8 gap-10 mt-2 xl:flex-row dark:text-white">
            <div className="flex justify-center ">
              <img className="w-[105px]" src={Logo} alt="Logo" />
            </div>
            
            <div className="flex justify-evenly gap-4">
              <img src={Snapchat} alt="Snapchat logo" />
              <img src={TikTok} alt="Snapchat logo" />
              <img src={Instagram} alt="Snapchat logo" />
              <img src={Twitter} alt="Snapchat logo" />
              <img src={Facebook} alt="Snapchat logo" />
            </div>    
          <div>
            <h5 className="text-center font-semibold text-xl">
              © FIA 2013-2024 Todo o conteúdo sujeito à aprovação da FIA
            </h5>
          </div>
        </footer>
      </>
    );
};

export default Footer;
