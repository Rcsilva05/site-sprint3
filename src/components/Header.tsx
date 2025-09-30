import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Vital<span className="text-blue-400">Link</span>
        </h1>

        {/* Menu */}
        <nav className="flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-blue-400 transition">Início</Link>
          <Link to="/services" className="hover:text-blue-400 transition">Serviços</Link>
          <Link to="/especialidades" className="hover:text-blue-400 transition">Especialidades</Link>
          <Link to="/contato" className="hover:text-blue-400 transition">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
