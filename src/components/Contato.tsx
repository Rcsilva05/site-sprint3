import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contato() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-blue-100">
              Estamos à disposição para melhor atendê-lo
            </p>
          </div>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}