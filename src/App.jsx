import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Nosotras from "./Nosotras";
import Valores from "./Valores";
import Contacto from "./Contacto";
import Login from "./pages/Login";
import { AuthProvider } from "./auth/AuthProvider";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* Redirige raíz al login */}
          <Route path="/" element={<Navigate to="/Home" />} />

          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Nosotras" element={<Nosotras />} />
          <Route path="/Valores" element={<Valores />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
