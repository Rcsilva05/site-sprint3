import { Heart, Bell, MessageCircle, FileText } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Heart size={40} className="text-blue-600 mx-auto" />,
    title: "Inovação que cuida",
    description: "Nosso aplicativo foi pensado para a saúde da população idosa.",
  },
  {
    id: 2,
    icon: <Bell size={40} className="text-blue-600 mx-auto" />,
    title: "Lembretes automáticos",
    description: "Nunca mais perca uma consulta ou horário de medicação.",
  },
  {
    id: 3,
    icon: <MessageCircle size={40} className="text-blue-600 mx-auto" />,
    title: "Chat com médicos",
    description: "Tire dúvidas rapidamente com profissionais de saúde.",
  },
  {
    id: 4,
    icon: <FileText size={40} className="text-blue-600 mx-auto" />,
    title: "Prontuário eletrônico",
    description: "Sistema acessível e seguro para idosos.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossos Recursos
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Tecnologia pensada para facilitar o acesso à saúde para a população idosa
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
