
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./firebase"; // asegúrate de que el path sea correcto

// 🧩 Importa el AuthProvider
import { AuthProvider } from "./context/AuthContext";

// 🧩 Importa Bootstrap CSS y JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*  Aquí envolvemos toda la app con el AuthProvider */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);


