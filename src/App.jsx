import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pilotos from './pages/Pilotos';
import Corridas from './pages/Corridas';
import Classificacao from './pages/Classificacao';
import Equipes from './pages/Equipes';
import Login from './pages/Login';
import Register from './pages/Register';
import Perfil from './pages/Perfil';
import Error from './pages/Error';
import GridE from './pages/Grid-E';

function App() {
  return (
    <>
      <main className="px-5 xl:px-12 dark:bg-[#333333] min-h-screen">
        <HashRouter>
          {/* O header e o footer estão fora da tag routes pq eles aparecem em todas as paginas e não precisam de uma rota específica */}
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/pilotos" element={<Pilotos />} />
            <Route path="/corridas" element={<Corridas />} />
            <Route path="/classificacao" element={<Classificacao />} />
            <Route path="/equipes" element={<Equipes />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/grid-e" element={<GridE />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </HashRouter>
      </main>
    </>
  );
}

export default App;
