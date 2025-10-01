import { Github, Linkedin } from "lucide-react";

export default function Team() {
  const members = [
    {
      id: 1,
      nome: "Nathanael Vieira",
      rm: "564990",
      cargo: "Desenvolvedor",
      github: "https://github.com/nathanael",
      linkedin: "https://linkedin.com/in/nathanael-cândido-mattos-vieira-392108129/",
      foto: "imagens/nathanael.jpeg",
    },
    {
      id: 2,
      nome: "Augusto Bonomo Junior",
      rm: "565155",
      cargo: "Líder",
      github: "https://github.com/augusto",
      linkedin: "https://linkedin.com/in/augusto-junior-bonomo-32777896/",
      foto: "imagens/augusto.jpeg",
    },
    {
      id: 3,
      nome: "Rodrigo Silva",
      rm: "565162",
      cargo: "Vendedor",
      github: "https://github.com/rodrigo",
      linkedin: "https://linkedin.com/in/rodrigo-silva-36a6a3216/",
      foto: "imagens/rodrigo.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Nossa Equipe</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <img
                src={member.foto}
                alt={member.nome}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.nome}</h3>
              <p className="text-gray-500">RM - {member.rm}</p>
              <p className="text-gray-700 mb-4">{member.cargo}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
