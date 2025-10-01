import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Especialidades from "./pages/Especialidades";
import Contato from "./pages/Contato";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/equipe" element={<Team />} />
          </Routes>
        </main>
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
}

export default App;
