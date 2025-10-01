import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Especialidades from "./pages/Especialidades";
import EspecialidadeDetalhe from "./pages/EspecialidadeDetalhe";
import Contato from "./pages/Contato";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About"; // 👈 importa a nova página

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16">
          <Routes>
            {/* Rotas estáticas */}
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/about" element={<About />} /> {/* 👈 nova rota */}

            {/* Rota dinâmica */}
            <Route
              path="/especialidades/:id"
              element={<EspecialidadeDetalhe />}
            />
          </Routes>
        </main>
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
}

export default App;

