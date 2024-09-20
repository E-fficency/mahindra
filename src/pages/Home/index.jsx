import CardsSwiper from "../../components/CardsSwiper";
import FuturoVelocidade from "../../components/FuturoVelocidade";
import MelhoresMomentos from "../../components/MelhoresMomentos";
import GridE from '../../components/GridE'
import MenuHamburguer from "../../components/MenuHamburguer";



const Home = () => {
  return (
    <>
      <FuturoVelocidade />
      <CardsSwiper />
      <GridE/>
      <MenuHamburguer/>
      <MelhoresMomentos />
    </>
  );
};

export default Home;
