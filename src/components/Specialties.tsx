export default function Specialties() {
  const specialties = [
    {
      id: 1,
      nome: "Cardiologia",
      descricao:
        "Exames preventivos e tratamentos cardíacos com tecnologia de última geração.",
    },
    {
      id: 2,
      nome: "Neurologia",
      descricao:
        "Diagnóstico e tratamento de doenças do sistema nervoso com especialistas renomados.",
    },
    {
      id: 3,
      nome: "Ortopedia",
      descricao:
        "Cuidado com ossos, articulações e sistema musculoesquelético.",
    },
    {
      id: 4,
      nome: "Pneumologia",
      descricao:
        "Tratamento de doenças respiratórias e acompanhamento especializado.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title">Nossas Especialidades</h2>
        <p className="section-sub">
          Cuidado integral para todas as fases da vida
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {specialties.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.nome}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
