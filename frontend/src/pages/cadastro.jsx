import Logo from "./Logo.png";
function Cadastro({ onCadastroSucesso }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onCadastroSucesso) {
      onCadastroSucesso();
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-green-50 overflow-hidden">
      <div
        className="absolute top-0 w-full h-[50vh] bg-green-100"
        style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
      ></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white p-8 rounded-xl shadow-2xl w-full max-w-md mx-4 mt-[20vh]"
      >
        <img src={Logo} alt="Logo" className="flex mx-auto mb-4 mr-16" />

        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">
          Cadastro
        </h2>

        <input
          type="text"
          placeholder="Nome"
          required
          className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-xl mb-5 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-xl mb-5 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
        />
        <input
          type="password"
          placeholder="Senha"
          required
          className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-xl mb-5 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 text-xl font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
