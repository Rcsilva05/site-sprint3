import Header from "../components/Header";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-16">
        <Hero />
        {/* REMOVEU o <Features /> daqui */}
        <Specialties />
        <Team />
      </main>
      <Footer />
    </>
  );
}