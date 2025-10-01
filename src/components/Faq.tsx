import { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      pergunta: "Como posso agendar uma consulta?",
      resposta: "Você pode agendar consultas através do nosso site, aplicativo ou por telefone. Basta clicar no botão 'Marque sua consulta' e seguir as instruções."
    },
    {
      pergunta: "Quais são as formas de pagamento?",
      resposta: "Aceitamos cartões de crédito (todas as bandeiras), débito, PIX e transferência bancária. Também aceitamos os principais convênios médicos."
    },
    {
      pergunta: "Como funciona o cancelamento?",
      resposta: "Cancelamentos podem ser feitos até 24h antes da consulta sem custos. Após esse período, pode ser cobrada uma taxa de acordo com nossa política."
    }
  ];

  const [ativo, setAtivo] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-lg">
                  {item.pergunta}
                </span>
                <span className="text-blue-600 font-bold text-xl">
                  {ativo === index ? "−" : "+"}
                </span>
              </button>
              {ativo === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{item.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou o que procurava?
          </p>
          <a 
            href="/contato" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
}
