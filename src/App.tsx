import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Especialidades from "./pages/Especialidades";
import Contato from "./pages/Contato";
import Team from "./components/Team";

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col"> {/* ← FORÇA CRESCIMENTO FLEX */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/equipe" element={<Team />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;