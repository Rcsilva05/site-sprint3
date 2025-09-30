import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Header />
      <main className="p-10">
        <h1 className="text-3xl font-bold text-center">Serviços</h1>
        <p className="text-center mt-4">
          Aqui você descreve os serviços oferecidos pela clínica.
        </p>
      </main>
      <Footer />
    </>
  );
}
