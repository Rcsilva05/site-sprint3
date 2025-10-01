import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-16">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Sobre */}
        <div>
          <h2 className="font-bold text-lg mb-2">VitalLink</h2>
          <p className="text-sm text-gray-300">
            Cuidando da sua saúde com tecnologia, dedicação e excelência.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-bold text-lg mb-2">Links Rápidos</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400 transition">Início</Link></li>
            <li><Link to="/servicos" className="hover:text-blue-400 transition">Serviços</Link></li>
            <li><Link to="/especialidades" className="hover:text-blue-400 transition">Especialidades</Link></li>
            <li><Link to="/contato" className="hover:text-blue-400 transition">Contato</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h2 className="font-bold text-lg mb-2">Contato</h2>
          <p className="text-sm">📞 (11) 99999-9999</p>
          <p className="text-sm">✉️ contato@vitallink.com</p>
          <p className="text-sm">📍 São Paulo - SP</p>
        </div>
      </div>

      <div className="bg-blue-950 text-center text-sm py-3">
        © {new Date().getFullYear()} VitalLink. Todos os direitos reservados.
      </div>
    </footer>
  );
}