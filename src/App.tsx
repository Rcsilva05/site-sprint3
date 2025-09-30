import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Especialidades from "./pages/Especialidades";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}



