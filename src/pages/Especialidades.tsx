import Header from "../components/Header";
import Footer from "../components/Footer";
import Specialties from "../components/Specialties";

export default function Especialidades() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-900 to-blue-700">
      <Header />

      {/* Hero */}
      <main className="flex-grow pt-16 text-white">
        <section className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Nossas Especialidades
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Conheça nosso corpo clínico especializado e dedicado ao seu bem-estar.
            </p>

            {/* Divider bonitinho */}
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </div>
        </section>

        {/* Especialidades */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <Specialties />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
