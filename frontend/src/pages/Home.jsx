import React from "react";

const livros = [
  {
    id: 1,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    capa: "https://th.bing.com/th/id/OIP.gZbY9CrYqLK7ZbHzu7y8PgHaLa?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    titulo: "O Cortiço",
    autor: "Aluísio Azevedo",
    capa: "https://th.bing.com/th/id/R.15c8414687b5e3feb3d3f8b084ed48b7?rik=7gPpx7eSuiJYPQ&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    titulo: "Grande Sertão: Veredas",
    autor: "Guimarães Rosa",
    capa: "https://th.bing.com/th/id/R.1376c40ea67d0561e5946910cd484227?rik=ITyu1VNJCS0l9g&pid=ImgRaw&r=0",
  },
  {
    id: 4,
    titulo: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    capa: "https://th.bing.com/th/id/R.e12c819ebd9ab365c3bb630e6cf322c6?rik=zM9%2bRxlrfEKJXQ&pid=ImgRaw&r=0",
  },
  {
    id: 5,
    titulo: "Iracema",
    autor: "José de Alencar",
    capa: "https://www.lpm.com.br/livros/imagens/iracema_9788525421814_9788525406835_hd.jpg", // URL atualizada
  },
  {
    id: 6,
    titulo: "O Guarani",
    autor: "José de Alencar",
    capa: "https://th.bing.com/th/id/OIP.syCTgME_WRb4I3q_94fUuAHaMR?rs=1&pid=ImgDetMain",
  },
  {
    id: 7,
    titulo: "Vidas Secas",
    autor: "Graciliano Ramos",
    capa: "https://www.record.com.br/wp-content/uploads/2019/07/16406.jpeg",
  },
  {
    id: 8,
    titulo: "O Peregrino",
    autor: "John Bunyan",
    capa: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1578928346i/50432577.jpg",
  },
  {
    id: 9,
    titulo: "Ressurreição",
    autor: "Liev Tolstói",
    capa: "https://www.infolivros.org/wp-content/uploads/2021/12/4-Ressurreicao-autor-Leon-Tolstoi.jpg",
  },
  {
    id: 10,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    capa: "https://www.jornalcruzeiro.com.br/_midias/jpg/2023/04/08/o_pequeno_principe____-1112328.jpg",
  },
  {
    id: 11,
    titulo: "1984",
    autor: "George Orwell",
    capa: "https://th.bing.com/th/id/OIP.g_ruYs50O9RO44w1p_1ISAHaLR?rs=1&pid=ImgDetMain",
  },
  {
    id: 12,
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    capa: "https://img.wook.pt/images/orgulho-e-preconceito-jane-austen/MXwxNTU2MDY1MXwxMTA1NDA0OXwxMzkxOTkwNDAwMDAw/500x",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
        Biblioteca Online
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {livros.map((livro) => (
          <div
            key={livro.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={livro.capa}
              alt={`Capa do livro ${livro.titulo}`}
              className="w-40 h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-green-900">
              {livro.titulo}
            </h2>
            <p className="text-green-700">{livro.autor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
