import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nosotras from "./Nosotras";
import Valores from "./Valores";
import Contacto from "./Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*  Esta ruta es esencial */}
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Nosotras" element={<Nosotras />} />
        <Route path="/Valores" element={<Valores />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
