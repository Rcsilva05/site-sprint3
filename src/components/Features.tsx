export default function Features() {
  const features = [
    {
      title: "Inovação que cuida",
      description: "Nosso app foi pensado para trazer mais autonomia e bem-estar para a população."
    },
    {
      title: "Lembretes automáticos", 
      description: "Nunca mais perca uma consulta ou horário de medicação importante."
    },
    {
      title: "Chat com médicos",
      description: "Tire dúvidas de forma prática e rápida com profissionais de saúde."
    },
    {
      title: "Prontuário eletrônico",
      description: "Sistema acessível e seguro para todos os seus dados de saúde."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Tecnologia pensada para facilitar o acesso à saúde para toda a população
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
