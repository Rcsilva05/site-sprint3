import { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      pergunta: "Quais serviços a Vitalink oferece?",
      resposta:
        "Oferecemos consultas presenciais e online, exames especializados e acompanhamento médico contínuo.",
    },
    {
      pergunta: "Como faço para agendar uma consulta?",
      resposta:
        "Você pode agendar diretamente pelo site no formulário de agendamento rápido ou entrar em contato pelo telefone.",
    },
    {
      pergunta: "A Vitalink atende convênios?",
      resposta:
        "Sim! Trabalhamos com diversos convênios médicos. Consulte nossa lista completa na página de serviços.",
    },
    {
      pergunta: "O atendimento online é seguro?",
      resposta:
        "Sim, utilizamos plataformas certificadas para garantir a privacidade e segurança dos pacientes.",
    },
  ];

  const [ativo, setAtivo] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm bg-white"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 font-semibold text-left hover:bg-gray-100 transition"
              >
                {item.pergunta}
                <span>{ativo === index ? "−" : "+"}</span>
              </button>
              {ativo === index && (
                <p className="p-4 text-gray-600 border-t">{item.resposta}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
