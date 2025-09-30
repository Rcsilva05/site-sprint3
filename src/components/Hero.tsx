export default function Hero() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          VitalLink: Cuidando da sua saúde com excelência
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          Tecnologia de ponta, profissionais qualificados e atendimento humanizado para sua melhor experiência em saúde.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#agendamento"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-medium transition"
          >
            Marque sua consulta
          </a>
          <a
            href="#especialidades"
            className="border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg text-lg font-medium transition"
          >
            Conheça nossos serviços
          </a>
        </div>
      </div>
    </section>
  );
}
