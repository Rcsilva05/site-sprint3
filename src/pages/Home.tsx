import Hero from "../components/Hero";
// import Specialties from "../components/Specialties"; // ❌ removido
import Team from "../components/Team";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Specialties specialties={specialties} /> ❌ removido */}
      <Team />
      <Faq />
    </main>
  );
}
