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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Título com destaque */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e agendamentos
          </p>
        </div>

        {/* Caixinhas estilizadas */}
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-8 text-left group hover:bg-blue-50 transition-all duration-300"
              >
                <span className="font-bold text-gray-800 text-xl group-hover:text-blue-700 transition-colors">
                  {item.pergunta}
                </span>
                <span className={`text-2xl font-bold transition-all duration-300 ${
                  ativo === index 
                    ? "text-blue-600 rotate-180 transform" 
                    : "text-gray-400 group-hover:text-blue-500"
                }`}>
                  ▼
                </span>
              </button>
              
              {ativo === index && (
                <div className="px-8 pb-8 animate-fadeIn">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-700 text-lg leading-relaxed bg-blue-50 p-6 rounded-xl border border-blue-100">
                      {item.resposta}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Link para contato estilizado */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md mx-auto">
            <p className="text-gray-600 mb-6 text-lg">
              Não encontrou o que procurava?
            </p>
            <a 
              href="/contato" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Entre em contato conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}