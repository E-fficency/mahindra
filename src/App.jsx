import CardsSwiper from "./components/CardsSwiper";
import Footer from "./components/Footer";
import FuturoVelocidade from "./components/FuturoVelocidade";
import GridE from "./components/GridE";
import Header from "./components/Header";

function App() {
  return ( 
    <>
    <main className="px-5">
      <Header />
      <FuturoVelocidade />
      <CardsSwiper/>
      <GridE/>
      <Footer />
    </main>
    </>
  );
}

export default App;
