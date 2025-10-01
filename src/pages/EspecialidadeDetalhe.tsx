import { useParams } from "react-router-dom";

const especialidades = {
  neuro: {
    nome: "Neurologia",
    descricao:
      "🧠 A Neurologia é a especialidade médica dedicada ao estudo, diagnóstico e tratamento das doenças que afetam o sistema nervoso — cérebro, medula espinhal, nervos e músculos. Com olhar atento e preciso, o neurologista investiga sintomas como dores de cabeça, tonturas, convulsões, distúrbios de memória e movimento, sempre buscando melhorar a qualidade de vida do paciente.",
    imagem: "/imagens/neurologia.jpg",
  },
  pediatria: {
    nome: "Pneumologia",
    descricao:
      "🌬️ A Pneumologia é a especialidade médica que cuida da saúde dos pulmões e das vias respiratórias. O pneumologista atua no diagnóstico, prevenção e tratamento de doenças como asma, bronquite, pneumonia, tuberculose e até problemas do sono, como a apneia.",
    imagem: "/imagens/pneumologia.jpeg",
  },
  gastro: {
    nome: "Gastroenterologia",
    descricao:
      "🥗 A Gastroenterologia é a especialidade responsável pelo cuidado do sistema digestivo — estômago, intestinos, fígado, pâncreas e outros órgãos relacionados. O gastroenterologista investiga e trata sintomas como azia, dores abdominais, má digestão, refluxo e alterações no funcionamento do intestino.",
    imagem: "/imagens/gastroenterologia.jpg",
  },
};

export default function EspecialidadeDetalhe() {
  const { id } = useParams<{ id: string }>();
  const especialidade = especialidades[id as keyof typeof especialidades];

  if (!especialidade) {
    return <p className="text-center text-red-500">Especialidade não encontrada.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-8">
        {especialidade.nome}
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
        <img
          src={especialidade.imagem}
          alt={especialidade.nome}
          className="w-full h-72 object-cover rounded-xl mb-6"
        />
        <p className="text-xl leading-relaxed text-gray-800 font-medium">
          {especialidade.descricao}
        </p>
      </div>
    </div>
  );
}
