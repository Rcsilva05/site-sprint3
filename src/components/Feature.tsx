export default function Features() {
  const features = [
    {
      title: "Inovação que cuida",
      description:
        "Nosso app foi pensado para trazer mais autonomia e bem-estar para a população.",
    },
    {
      title: "Lembretes automáticos",
      description:
        "Nunca mais perca uma consulta ou horário de medicação importante.",
    },
    {
      title: "Chat com médicos",
      description:
        "Tire dúvidas de forma prática e rápida com profissionais de saúde.",
    },
    {
      title: "Prontuário eletrônico",
      description:
        "Sistema acessível e seguro para todos os seus dados de saúde.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <article
            key={i}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-3">
              {f.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{f.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
