import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Specialties from "../components/Specialties";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16"> {/* ← ADICIONE ESTA CLASSE */}
        <Hero />
        <Features />
        <Specialties />
        <Team />
      </main>
      <Footer />
    </>
  );
}