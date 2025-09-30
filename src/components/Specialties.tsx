export default function Specialties() {
  const specialties = [
    {
      id: 1,
      nome: "Cardiologia",
      descricao:
        "Exames preventivos e tratamentos cardíacos com tecnologia de última geração.",
      icon: "❤️",
    },
    {
      id: 2,
      nome: "Neurologia",
      descricao:
        "Diagnóstico e tratamento de doenças do sistema nervoso com especialistas renomados.",
      icon: "🧠",
    },
    {
      id: 3,
      nome: "Ortopedia",
      descricao:
        "Cuidado com ossos, articulações e sistema musculoesquelético.",
      icon: "🦴",
    },
    {
      id: 4,
      nome: "Pneumologia",
      descricao:
        "Tratamento de doenças respiratórias e acompanhamento especializado.",
      icon: "🫁",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Nossas Especialidades</h2>
        <p className="text-gray-600 mb-12">
          Cuidado integral para todas as fases da vida
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {specialties.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.nome}</h3>
              <p className="text-gray-600">{item.descricao}</p>
              <button className="text-orange-500 font-semibold mt-4 hover:underline">
                Saiba mais →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
