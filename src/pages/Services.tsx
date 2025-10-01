import Features from "../components/Features";

export default function Services() {
  return (
    <>
      {/* HERO AZUL (maior e com título dentro) */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Nossos Serviços
          </h1>
          <p className="mt-4 text-md md:text-lg text-blue-100 max-w-3xl mx-auto">
            Conheça todos os serviços que oferecemos para cuidar da sua saúde
          </p>

          {/* linha decorativa */}
          <div className="mt-6">
            <span className="inline-block w-20 h-1 bg-white/30 rounded"></span>
          </div>
        </div>
      </header>

      {/* ÁREA DE CARDS */}
      <main className="bg-gray-50">
        <section className="max-w-7xl mx-auto px-6 py-14">
          {/* subtítulo / explicação (opcional) */}
          <p className="text-center text-gray-600 mb-10 text-lg">
            Tecnologia pensada para facilitar o acesso à saúde para toda a população
          </p>

          {/* componente que renderiza apenas os cards */}
          <Features />
        </section>
      </main>
    </>
  );
}
