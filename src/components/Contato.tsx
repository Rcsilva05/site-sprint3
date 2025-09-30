// src/pages/Contato.tsx
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";

type ContatoData = {
  nome: string;
  email: string;
  mensagem: string;
};

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContatoData>();

  const onSubmit = (data: ContatoData) => {
    console.log("Contato enviado:", data);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <>
      <Header />
      <main className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Entre em Contato</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-md"
        >
          {/* Nome */}
          <div>
            <label className="block font-medium">Nome</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              {...register("nome", { required: "O nome é obrigatório" })}
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">{errors.nome.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              {...register("email", { required: "O email é obrigatório" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Mensagem */}
          <div>
            <label className="block font-medium">Mensagem</label>
            <textarea
              className="w-full border p-2 rounded"
              rows={5}
              {...register("mensagem", { required: "A mensagem é obrigatória" })}
            ></textarea>
            {errors.mensagem && (
              <p className="text-red-500 text-sm">{errors.mensagem.message}</p>
            )}
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
