import { useForm } from "react-hook-form";

type FormData = {
  nome: string;
  telefone: string;
  data: string;
  mensagem: string;
};

export default function AgendamentoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    alert("Agendamento enviado com sucesso!");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 bg-blue-50 rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Agendamento Rápido
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Nome */}
          <div className="flex flex-col">
            <label className="font-medium">Nome Completo*</label>
            <input
              type="text"
              className="border p-3 rounded-lg"
              {...register("nome", { required: "O nome é obrigatório" })}
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">{errors.nome.message}</p>
            )}
          </div>

          {/* Telefone */}
          <div className="flex flex-col">
            <label className="font-medium">Telefone*</label>
            <input
              type="tel"
              className="border p-3 rounded-lg"
              {...register("telefone", {
                required: "O telefone é obrigatório",
                pattern: {
                  value: /^[0-9]{9,11}$/,
                  message: "Digite um telefone válido",
                },
              })}
            />
            {errors.telefone && (
              <p className="text-red-500 text-sm">{errors.telefone.message}</p>
            )}
          </div>

          {/* Data */}
          <div className="flex flex-col">
            <label className="font-medium">Data*</label>
            <input
              type="date"
              className="border p-3 rounded-lg"
              {...register("data", { required: "A data é obrigatória" })}
            />
            {errors.data && (
              <p className="text-red-500 text-sm">{errors.data.message}</p>
            )}
          </div>

          {/* Mensagem */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium">Mensagem</label>
            <textarea
              rows={4}
              className="border p-3 rounded-lg"
              {...register("mensagem")}
            ></textarea>
          </div>

          {/* Botão */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Confirmar Agendamento
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
