import React, { useState } from "react";
// Certifique-se que o nome do arquivo e o caminho estão corretos.
// Se o arquivo for 'Cadastro.jsx' (com C maiúsculo) na pasta 'pages':
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
    // Passa a função handleCadastroSucesso como prop para o Cadastro
    <Cadastro onCadastroSucesso={handleCadastroSucesso} />
  );
}

export default App;
