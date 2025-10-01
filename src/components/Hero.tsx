import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-dark flex items-center justify-center min-h-[60vh]"> {/* ← Mudei de 80vh para 60vh */}
      <div className="container mx-auto px-6 text-center">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          VitaLLink: Cuidando da sua saúde com excelência
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-blue-100 leading-relaxed"
        >
          Tecnologia de ponta, profissionais qualificados e atendimento humanizado
          para sua melhor experiência em saúde.
        </motion.p>

        {/* Botões CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          
        >
          <Link to="/especialidades" className="btn-primary">
            Marque sua consulta
          </Link>
          <Link to="/servicos" className="btn-outline">
            Conheça nossos serviços
          </Link>
        </motion.div>
      </div>
    </section>
  );
}