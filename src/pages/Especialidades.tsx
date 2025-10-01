import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const especialidades = [
  {
    id: "neuro",
    nome: "Neurologia",
    descricao: "Tratamento de distúrbios neurológicos.",
    imagem: "/imagens/neurologia.jpg",
    cor: "bg-blue-100",
  },
  {
    id: "pediatria",
    nome: "Pneumologia",
    descricao: "Prevenção e tratamento das doenças respiratórias.",
    imagem: "/imagens/pneumologia.jpeg",
    cor: "bg-green-100",
  },
  {
    id: "gastro",
    nome: "Gastroenterologia",
    descricao: "Especialistas no sistema digestivo.",
    imagem: "/imagens/gastroenterologia.jpg",
    cor: "bg-yellow-100",
  },
];

export default function Especialidades() {
  // estados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !email || !especialidade || !mensagem) {
      setErro("⚠️ Preencha todos os campos antes de enviar.");
      return;
    }

    setErro("");
    alert(`✅ Agendamento enviado com sucesso para ${nome}!`);
    navigate("/"); // redireciona para home
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Nossas Especialidades</h1>

      {/* Grid das especialidades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {especialidades.map((esp) => (
          <Link
            to={`/especialidades/${esp.id}`}
            key={esp.id}
            className={`block rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden ${esp.cor} cursor-pointer`}
          >
            <img
              src={esp.imagem}
              alt={esp.nome}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {esp.nome}
              </h2>
              <p className="text-gray-700 mb-2">{esp.descricao}</p>
              <span className="text-sm text-indigo-600 font-medium">
                👉 Clique para ver mais detalhes
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Formulário de agendamento */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Agende sua Consulta</h2>

        {erro && <p className="text-red-600 text-center mb-4">{erro}</p>}

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap items-end justify-center gap-4"
        >
          {/* Nome */}
          <div className="flex flex-col w-48">
            <label className="font-medium">Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-56">
            <label className="font-medium">E-mail:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* Especialidade */}
          <div className="flex flex-col w-52">
            <label className="font-medium">Especialidade:</label>
            <select
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:ring focus:ring-indigo-300"
            >
              <option value="">Selecione...</option>
              {especialidades.map((esp) => (
                <option key={esp.id} value={esp.nome}>
                  {esp.nome}
                </option>
              ))}
            </select>
          </div>

          {/* Mensagem */}
          <div className="flex flex-col w-64">
            <label className="font-medium">Mensagem:</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:ring focus:ring-indigo-300"
              rows={1}
            />
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
      </div>
    </div>
  );
}
