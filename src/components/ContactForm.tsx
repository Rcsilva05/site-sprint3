import { useForm } from "react-hook-form";

type ContactData = {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>();

  const onSubmit = (data: ContactData) => {
    console.log("Contato enviado:", data);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-gray-600">
              Estamos à disposição para melhor atendê-lo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    {...register("nome", { required: "Nome é obrigatório" })}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  {errors.nome && (
                    <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email é obrigatório" })}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    {...register("telefone")}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select
                    {...register("assunto")}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="consulta">Agendamento de Consulta</option>
                    <option value="duvida">Dúvida</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    {...register("mensagem", { required: "Mensagem é obrigatória" })}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  ></textarea>
                  {errors.mensagem && (
                    <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Telefone</h4>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contato@vitallink.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Endereço</h4>
                  <p className="text-gray-600">São Paulo - SP</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}