import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Team from "../components/Team";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Specialties />
      <Team />
      <Faq />
    </main>
  );
}
