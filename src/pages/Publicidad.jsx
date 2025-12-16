
import { Link } from "react-router-dom";
import "./Publicidad.css";

export default function Publicidad() {
    return (
        <>
            {/* 🎵 AUDIO */}
            <div
                style={{
                    position: "fixed",
                    bottom: "15px",
                    left: "15px",
                    background: "white",
                    padding: "6px",
                    borderRadius: "12px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                    zIndex: 999,
                }}
            >
                <audio controls style={{ width: "160px" }}>
                    <source src="/Musica.mp3" type="audio/mpeg" />
                </audio>
            </div>

            {/* BANNER */}

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





                <header>
                    <div className="banner">
                        <h1>Mujeres creando el futuro digital ✨</h1>
                        <p>Aprende · Crea · Impacta con tecnología</p>

                        <button
                            className="cta-btn"
                            onClick={() => alert("¡Gracias por unirte! 💖")}
                        >
                            🚀 Únete a FULL STACKER
                        </button>
                    </div>
                </header>

                {/* PROPUESTA */}
                <section className="propuesta-valor">
                    <h2>¿Quiénes Somos?</h2>
                    <p>
                        Una comunidad de mujeres desarrolladoras web que aprenden, crean y
                        transforman ideas en proyectos digitales reales.
                    </p>

                    <div className="imagenes">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1168&q=80" />
                        <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1170&q=80" />
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1170&q=80" />
                    </div>
                </section>

                {/* TARJETAS */}
                <section className="tarjetas">
                    <div className="tarjeta">
                        <h3>Talentosas</h3>
                        <p>Frontend y backend con creatividad.</p>
                    </div>
                    <div className="tarjeta">
                        <h3>Determinadas</h3>
                        <p>Rompiendo barreras en tecnología.</p>
                    </div>
                    <div className="tarjeta">
                        <h3>Tecnología</h3>
                        <p>Ideas que se vuelven realidad.</p>
                    </div>
                </section>

                <footer>
                    <p>Contacto: info@fullstacker.com</p>
                    <p>Síguenos: Instagram · Twitter · LinkedIn</p>
                </footer>

                <div className="copyright">© 2025 FULL STACKER</div>
            </div>
        </>
    );
}