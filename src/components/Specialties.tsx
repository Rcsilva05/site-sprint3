import { HeartPulse, Brain, Bone, Stethoscope } from "lucide-react";

interface Specialty {
  id: number;
  nome: string;
  descricao: string;
  icon: JSX.Element;
}

export default function Specialties() {
  const specialties: Specialty[] = [
    {
      id: 1,
      nome: "Cardiologia",
      descricao:
        "Exames preventivos e tratamentos cardíacos com tecnologia de última geração.",
      icon: <HeartPulse className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 2,
      nome: "Neurologia",
      descricao:
        "Diagnóstico e tratamento de doenças do sistema nervoso com especialistas renomados.",
      icon: <Brain className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 3,
      nome: "Ortopedia",
      descricao:
        "Cuidado com ossos, articulações e sistema musculoesquelético.",
      icon: <Bone className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 4,
      nome: "Pneumologia",
      descricao:
        "Tratamento de doenças respiratórias e acompanhamento especializado.",
      icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {specialties.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {/* Ícone dentro de círculo */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.nome}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
