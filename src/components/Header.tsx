import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/servicos", label: "Serviços" },
    { path: "/especialidades", label: "Especialidades" },
    { path: "/contato", label: "Contato" },
    { path: "/About", label: "Sobre nós" },

    
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">VitalLink</Link>

        {/* Menu Desktop */}
        <nav className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-blue-300 transition-colors ${
                isActive(item.path) ? "text-blue-300 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}