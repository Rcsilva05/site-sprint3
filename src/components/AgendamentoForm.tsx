import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type FormData = {
  nome: string;
  telefone: string;
  especialidade: string;
  data: string;
};

export default function AgendamentoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Agendamento enviado:", data);
    alert("Consulta agendada com sucesso!");
  };

  return (
    <section id="agendamento" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
            Agendamento Rápido
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-6 md:grid-cols-2"
          >
            <div>
              <input
                type="text"
                placeholder="Nome Completo*"
                {...register("nome", { required: "O nome é obrigatório" })}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
              {errors.nome && (
                <p className="text-red-500 text-sm">{errors.nome.message}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Telefone*"
                {...register("telefone", {
                  required: "O telefone é obrigatório",
                  pattern: {
                    value: /^[0-9]{9,11}$/,
                    message: "Digite apenas números válidos",
                  },
                })}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
              {errors.telefone && (
                <p className="text-red-500 text-sm">
                  {errors.telefone.message}
                </p>
              )}
            </div>
            <select
              {...register("especialidade", {
                required: "Selecione uma especialidade",
              })}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            >
              <option value="">Selecione a especialidade</option>
              <option value="Cardiologista">Cardiologista</option>
              <option value="Ortopedista">Ortopedista</option>
              <option value="Clínico Geral">Clínico Geral</option>
            </select>
            <input
              type="date"
              {...register("data", { required: "Selecione a data" })}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Confirmar Agendamento
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
