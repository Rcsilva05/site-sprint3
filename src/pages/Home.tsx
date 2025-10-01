import Header from "../components/Header";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Team from "../components/Team";
import Faq from "../components/Faq"; 
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16"> {/* ← Correto para header fixed */}
        <Hero />
        <Specialties /> {/* ← Agora com py-8 reduzido */}
        <Team />
        <Faq /> 
      </main>
      <Footer />
    </>
  );
}