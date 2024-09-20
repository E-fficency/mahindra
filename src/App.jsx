import Header from "./components/Header";
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pilotos from "./pages/Pilotos";
import Corridas from "./pages/Corridas";
import Classificacao from "./pages/Classificacao";

function App() {
  return ( 
    <>
    <main className="px-5 xl:px-12 dark:bg-[#333333]">
      <BrowserRouter>
      {/* O header e o footer estão fora da tag routes pq eles aparecem em todas as paginas e não precisam de uma rota específica */}
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pilotos" element={<Pilotos/>} />
          <Route path="/corridas" element={<Corridas/>}/>
          <Route path="/classificacao" element={<Classificacao />}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </main>
    </>
  );
}

export default App;
