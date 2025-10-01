import { useNavigate } from "react-router-dom";

type Props = {
  specialties: { id: string; nome: string }[];
};

export default function Specialties({ specialties }: Props) {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Nossas Especialidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/especialidades/${item.id}`)}
              className="p-6 bg-white shadow-md rounded-xl text-center hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{item.nome}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Clique para ver detalhes de {item.nome}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
