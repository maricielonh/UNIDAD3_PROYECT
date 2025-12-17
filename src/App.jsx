import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Nosotras from "./Nosotras";
import Valores from "./Valores";
import Contacto from "./Contacto";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";
import Publicidad from "./pages/Publicidad";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      {/* Redirige raíz al Home */}
      <Route path="/" element={<Navigate to="/Home" />} />

      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Nosotras" element={<Nosotras />} />
      <Route path="/Valores" element={<Valores />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/publicidad" element={<Publicidad />} />

      {/* Ruta protegida */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </HashRouter>
  );
}

export default App;