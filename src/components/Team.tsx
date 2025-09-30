export default function Team() {
  const members = [
    {
      id: 1,
      nome: "Nathanael Vieira",
      rm: "564990",
      cargo: "Desenvolvedor",
      imagem: "https://via.placeholder.com/150",
      github: "#",
      linkedin: "#",
    },
    {
      id: 2,
      nome: "Augusto Bonomo Junior",
      rm: "565155",
      cargo: "Líder",
      imagem: "https://via.placeholder.com/150",
      github: "#",
      linkedin: "#",
    },
    {
      id: 3,
      nome: "Rodrigo Silva",
      rm: "565162",
      cargo: "Vendedor",
      imagem: "https://via.placeholder.com/150",
      github: "#",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Nossa Equipe Vitalink</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((m) => (
            <div
              key={m.id}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <img
                src={m.imagem}
                alt={m.nome}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{m.nome}</h3>
              <p className="text-gray-500">RM - {m.rm}</p>
              <p className="text-blue-600 font-medium">{m.cargo}</p>

              <div className="flex justify-center gap-4 mt-4">
                <a href={m.github} target="_blank" className="hover:opacity-70">
                  🐙
                </a>
                <a
                  href={m.linkedin}
                  target="_blank"
                  className="hover:opacity-70"
                >
                  💼
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
