import { useState } from "react";

export default function FormularioAgendamento() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    especialidade: "",
    mensagem: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.especialidade || !formData.mensagem) {
      setError("⚠️ Preencha todos os campos antes de enviar.");
      return;
    }

    setError("");
    alert("✅ Agendamento enviado com sucesso!");
    setFormData({ nome: "", email: "", especialidade: "", mensagem: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Agende sua Consulta</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-end justify-center gap-4 bg-white shadow-lg rounded-2xl p-6 max-w-6xl mx-auto"
      >
        {/* Nome */}
        <div className="flex flex-col w-48">
          <label className="text-gray-700 mb-1">Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* E-mail */}
        <div className="flex flex-col w-56">
          <label className="text-gray-700 mb-1">E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Especialidade */}
        <div className="flex flex-col w-52">
          <label className="text-gray-700 mb-1">Especialidade:</label>
          <select
            name="especialidade"
            value={formData.especialidade}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Selecione...</option>
            <option value="neurologia">Neurologia</option>
            <option value="pneumologia">Pneumologia</option>
            <option value="gastroenterologia">Gastroenterologia</option>
          </select>
        </div>

        {/* Mensagem */}
        <div className="flex flex-col w-64">
          <label className="text-gray-700 mb-1">Mensagem:</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={1}
            required
          ></textarea>
        </div>

        {/* Botão */}
        <div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Enviar
          </button>
        </div>
      </form>

      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
    </div>
  );
}
