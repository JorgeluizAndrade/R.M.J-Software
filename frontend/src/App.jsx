import React, { useState } from "react";
import Cadastro from "./pages/cadastro";
import Home from "./pages/Home";

function App() {
  const [cadastrado, setCadastrado] = useState(false);

  // Função que será passada para o componente Cadastro
  const handleCadastroSucesso = () => {
    setCadastrado(true);
  };

  return cadastrado ? (
    <Home />
  ) : (
    <Cadastro onCadastroSucesso={handleCadastroSucesso} />
  );
}

export default App;
