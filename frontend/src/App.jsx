// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h1>Bem vindo a livraria</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
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
