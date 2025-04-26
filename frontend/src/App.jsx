import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "/src/pages/Cadastro";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h1>Vite + React</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/cadastro">Cadastro</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Bem-vindo à página inicial!</h2>} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
