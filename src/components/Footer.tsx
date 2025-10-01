import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-gradient-to-r from-blue-900 to-blue-800 text-white ${className || ""}`}>
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Sobre */}
        <div>
          <h2 className="font-bold text-xl mb-3">VitalLink</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Cuidando da sua saúde com tecnologia, dedicação e excelência.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-bold text-xl mb-3">Links Rápidos</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-300 transition">Início</Link>
            </li>
            <li>
              <Link to="/servicos" className="hover:text-blue-300 transition">Serviços</Link>
            </li>
            <li>
              <Link to="/especialidades" className="hover:text-blue-300 transition">Especialidades</Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-blue-300 transition">Contato</Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h2 className="font-bold text-xl mb-3">Contato</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} className="text-blue-300" /> (11) 99999-9999
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} className="text-blue-300" /> contato@vitallink.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} className="text-blue-300" /> São Paulo - SP
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-blue-950 text-center text-sm py-4 border-t border-blue-800">
        © {new Date().getFullYear()} <span className="font-semibold">VitalLink</span>. Todos os direitos reservados.
      </div>
    </footer>
  );
}
