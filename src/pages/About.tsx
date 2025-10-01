import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-12">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            Sobre Nós
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            A <span className="font-semibold text-blue-600">VitaLLink Tecnologia</span> 
            nasceu com o propósito de transformar o cuidado em saúde, unindo excelência
            médica, inovação tecnológica e acolhimento humano. Cada detalhe é pensado 
            para oferecer qualidade de vida, confiança e segurança.
          </p>
        </motion.div>

        {/* Espaço para a imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/imagens/Vital.jpg" // Coloque a logo ou outra imagem nessa pasta
            alt="Logo VitaLLink"
            className="w-64 md:w-80 rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Missão */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-blue-700">Nossa Missão</h3>
          <p className="text-gray-600 leading-relaxed">
            Proporcionar saúde integral com atendimento humanizado, ágil e seguro.
            Nossos profissionais, apoiados por tecnologia de ponta, buscam sempre
            a melhor solução para cada paciente.
          </p>
        </motion.div>

        {/* Visão */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-blue-700">Nossa Visão</h3>
          <p className="text-gray-600 leading-relaxed">
            Ser referência em qualidade de atendimento e inovação em saúde, expandindo
            nossos serviços com ética e tecnologia, sempre priorizando confiança e
            segurança.
          </p>
        </motion.div>

        {/* Valores */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-blue-700">Nossos Valores</h3>
          <ul className="list-disc pl-6 text-gray-600 text-left space-y-2">
            <li><span className="font-medium">Ética e transparência</span> em cada atendimento</li>
            <li><span className="font-medium">Respeito e acolhimento</span> aos pacientes</li>
            <li><span className="font-medium">Inovação contínua</span> em tecnologia e práticas médicas</li>
            <li><span className="font-medium">Comprometimento</span> com resultados reais</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
