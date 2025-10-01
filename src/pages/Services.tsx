import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features"; // ← adicionei feature nova

export default function Services() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-lg md:text-xl text-blue-100">
              Conheça todos os serviços que oferecemos para cuidar da sua saúde
            </p>
          </div>
        </div>
        
        {/* ADICIONE O FEATURES AQUI */}
        <Features />
      </main>
      <Footer />
    </>
  );
}