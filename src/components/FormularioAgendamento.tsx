import { useState } from "react";

export default function FormularioAgendamento() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [horario, setHorario] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !telefone || !especialidade || !horario) {
      alert("⚠️ Por favor, preencha todos os campos antes de confirmar o agendamento.");
      return;
    }

    
    alert("✅ Agendamento realizado com sucesso!"); // ajuste para preencher campo
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Agendamento Rápido</h2>
        <p className="text-gray-600 mb-8">
          Preencha os dados abaixo para marcar sua consulta
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Nome */}
          <div className="flex flex-col text-left">
            <label className="font-medium text-gray-700 mb-1">Nome Completo*</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome completo"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Telefone */}
          <div className="flex flex-col text-left">
            <label className="font-medium text-gray-700 mb-1">Telefone*</label>
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(11) 99999-9999"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Especialidade */}
          <div className="flex flex-col text-left">
            <label className="font-medium text-gray-700 mb-1">Especialidade*</label>
            <select
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione uma especialidade</option>
              <option value="Cardiologia">Cardiologia</option>
              <option value="Neurologia">Neurologia</option>
              <option value="Ortopedia">Ortopedia</option>
              <option value="Pneumologia">Pneumologia</option>
            </select>
          </div>

          {/* Horário */}
          <div className="flex flex-col text-left">
            <label className="font-medium text-gray-700 mb-1">Horário Preferencial*</label>
            <select
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione um horário</option>
              <option value="08:00">08:00</option>
              <option value="10:00">10:00</option>
              <option value="14:00">14:00</option>
              <option value="16:00">16:00</option>
            </select>
          </div>

          {/* Botão */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Confirmar Agendamento
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
