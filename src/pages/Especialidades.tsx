import Specialties from "../components/Specialties";
import FormularioAgendamento from "../components/FormularioAgendamento";

export default function Especialidades() {
  return (
    <main className="pt-16">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Especialidades</h1>
          <p className="text-lg md:text-xl text-blue-100">
            Conheça nosso corpo clínico especializado
          </p>
        </div>
      </div>
      <Specialties />
      <FormularioAgendamento />
    </main>
  );
}
