import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth/AuthContext";
import Home from "./routes/Home";
import RootLayout from "./layout/RootLayout";
import PerfilRestaurante from "./routes/PerfilRestaurante";
import Restaurantes from "./routes/Restaurantes";
import PaginaNaoEncontrada from "./routes/PaginaNaoEncontrada";
import Login from "./routes/Login";
import Register from "./routes/Register";
import PerfilUsuario from "./routes/PerfilUsuario";
import Cidade from "./routes/Cidade";
import PerfilCidade from "./routes/PerfilCidade";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/restaurantes" element={<Restaurantes />} />
            <Route path="/restaurantes/:id" element={<PerfilRestaurante />} />
            <Route path="/cidades" element={<Cidade/>} />
            <Route path="/cidades/:id" element={<PerfilCidade/>} />
            <Route path="/perfil" element={<PerfilUsuario />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
