import { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      pergunta: "Como posso agendar uma consulta?",
      resposta: "Você pode agendar diretamente pelo site no formulário de agendamento rápido ou entrar em contato pelo telefone."
    },
    {
      pergunta: "Quais são as formas de pagamento?",
      resposta: "Aceitamos cartão de crédito, débito, PIX e principais convênios médicos."
    },
    {
      pergunta: "Como funciona o cancelamento?",
      resposta: "Cancelamentos podem ser feitos com até 24h de antecedência sem custos. Entre em contato conosco."
    }
  ];

  const [ativo, setAtivo] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="section-title">Perguntas Frequentes</h2>
        </div>

        {/* Itens FAQ */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-800">{item.pergunta}</span>
                <span className="text-blue-600 font-bold text-lg">
                  {ativo === index ? "−" : "+"}
                </span>
              </button>
              {ativo === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{item.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
