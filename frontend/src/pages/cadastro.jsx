import { useState } from "react";
import Logo from "./Logo.png";
import axios from "axios";

function Cadastro({ onCadastroSucesso }) {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const dataToSend = {
        ...formData,
        role: "USER",
      };

      // AVISO CORRIGIDO: Removemos "const response ="
      await axios.post("http://localhost:8080/api/auth/register", dataToSend);

      setMessage("Cadastro realizado com sucesso! Redirecionando...");
      if (onCadastroSucesso) {
        setTimeout(() => {
          onCadastroSucesso();
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        setMessage(`Erro: ${error.response.data}`);
      } else {
        // AQUI ESTÁ O ERRO QUE VOCÊ VIU
        setMessage("Erro: Não foi possível conectar ao servidor.");
      }
      console.error("Erro no cadastro:", error);
    }
  };

  // ... o resto do seu código JSX continua o mesmo ...
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-green-50 overflow-hidden">
      <div
        className="absolute top-0 w-full h-[50vh] bg-green-100"
        style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
      ></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white p-8 rounded-xl shadow-2xl w-full max-w-md mx-4 mt-[10vh]"
      >
        <img src={Logo} alt="Logo" className="flex mx-auto mb-4 mr-16" />
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">
          Cadastro
        </h2>
        <input
          type="text"
          name="username"
          placeholder="Nome de usuário (username)"
          required
          className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-xl mb-5 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Nome Completo"
          required
          className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-xl mb-5 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-xl mb-5 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          required
          className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-xl mb-5 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 text-xl font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Cadastrar
        </button>
        {message && <p className="text-center mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
}

export default Cadastro;
