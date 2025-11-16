import { Link } from "react-router-dom";
import React from "react";
import valoresData from "./data/valores.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import "./Maricielo.css";





export default function Valores() {
  return (
    <>
      <div>
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
                      <Link className="nav-link" to="/Login">Dashboard</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>



      <section className="valores">
        <div >
          <h2 className="letra text-center mt-5 tamaño2">Nuestros valores fundamentales</h2>

          <div className="team-grid">
            {valoresData.map((valor, index) => (
              <article key={index} className="miembro fade-in text-center m-4">
                <h3 className="letravalores">
                  {valor.emoji} {valor.titulo}
                </h3>
                <div className="present3">
                  <p className="letra2">{valor.descripcion}</p>
                  <p className="tamaño">
                    <strong>
                      <em>{valor.frase}</em>
                    </strong>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}