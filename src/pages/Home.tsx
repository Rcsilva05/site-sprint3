import Hero from "../components/Hero";
import Features from "../components/Features";
import AgendamentoForm from "../components/AgendamentoForm";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <AgendamentoForm />
        <Team />
      </main>
      <Footer />
    </>
  );
}
