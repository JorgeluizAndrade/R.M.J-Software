// src/pages/Cadastro.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.png";

function Cadastro() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("USER");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, password, role }),
      });

      if (!resposta.ok) throw new Error("Erro no cadastro");

      const dados = await resposta.json();
      alert(dados.mensagem || "Cadastro realizado com sucesso!");
      navigate("/"); // ✅ Redireciona para home
    } catch (erro) {
      console.error("Erro ao cadastrar:", erro);
      alert("Erro ao cadastrar. Verifique o console.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-green-50 overflow-hidden">
      <div
        className="absolute top-0 w-full h-[50vh] bg-green-100"
        style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
      ></div>

      <form
        className="relative z-10 bg-white p-8 rounded-xl shadow-2xl w-full max-w-md mx-4 mt-[20vh]"
        onSubmit={handleSubmit}
      >
        <img src={Logo} alt="Logo" className="flex mx-auto mb-4 mr-16" />
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">
          Cadastro
        </h2>

        <div>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-xl mb-5"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-xl mb-5"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-xl mb-5"
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled
            className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-xl mb-5"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 text-xl font-semibold rounded-xl hover:shadow-lg"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
