import Header from "../components/Header";
import Footer from "../components/Footer";
import Specialties from "../components/Specialties";

export default function Especialidades() {
  return (
    <>
      <Header />
      <main className="p-10">
        <h1 className="text-3xl font-bold text-center">Página de Especialidades</h1>
        <p className="text-center mt-4">
          Confira nossas especialidades médicas abaixo.
        </p>
        <Specialties />
      </main>
      <Footer />
    </>
  );
}
