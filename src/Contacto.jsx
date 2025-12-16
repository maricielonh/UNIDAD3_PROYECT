import { Link } from "react-router-dom";
import './NAYELI.css';
import React from "react";
import Formulario from "./Formulario";




export default function Contacto() {
  return (
    <>
      <div className="NOSObody">
        <div >
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark colorbanner" style={{ height: "100px" }}>
              <div className="container-fluid">
                <Link className="navbar-brand NOSObanner" to="/">FULL STACKERS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ms-auto fs-4">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">INICIO</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Nosotras">NOSOTRAS SOMOS</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Valores">NUESTROS VALORES</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Contacto">CONTACTO</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/publicidad">
                        PUBLICIDAD
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Login">Dashboard</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>


        <section className="contacto">
          <h1 className="letra text-center mt-4">Hablemos</h1>
          <p className="intro text-center px-4">
            Si buscas un equipo apasionado por el desarrollo, el diseño y la innovación, aquí estamos para escucharte.
            Comparte tu idea y construyámosla juntos.
          </p>

          <div className="cards container my-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card h-100 p-3 text-center shadow-sm">
                  <h3>Correo General</h3>
                  <p>📧 hola@fullstackers.dev</p>
                  <span>Para dudas, consultas o presentarnos tu proyecto.</span>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 p-3 text-center shadow-sm">
                  <h3>Colaboraciones & Alianzas</h3>
                  <p>📧 partners@fullstackers.dev</p>
                  <span>Conversemos sobre oportunidades de trabajo en conjunto.</span>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 p-3 text-center shadow-sm">
                  <h3>Capacitaciones & Eventos</h3>
                  <p>📧 training@fullstackers.dev</p>
                  <span>Solicita información sobre nuestros talleres y charlas técnicas.</span>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 p-3 text-center shadow-sm">
                  <h3>Encuéntranos en redes</h3>
                  <ul className="list-unstyled">
                    <li>📸 Instagram: @fullstackers</li>
                    <li>💼 LinkedIn: Full Stackers</li>
                    <li>🐱 GitHub: @full-stackers</li>
                    <li>🐦 Twitter: @fullstackers_dev</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Formulario />

        <footer className="text-center mt-5 py-3 bg-dark text-white">
          <p>© 2025 Full Stackers. Todos los derechos reservados.</p>
          <p>Desarrollando ideas con tecnología y pasión 💻</p>
        </footer>







      </div>
    </>
  );
}



