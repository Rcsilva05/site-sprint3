import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contato() {
  return (
    <>
      <Header />
      <main className="pt-16"> {/* ← PADDING PARA HEADER FIXO */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}