import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Home from "./pages/Home"; // <-- aqui!
import "./App.css";

function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} />  {/* Cadastro na raiz */}
        <Route path="/home" element={<Home />} /> {/* Home após cadastro */}
      </Routes>
    </Router>
  );

}

export default App;
