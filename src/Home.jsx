import { useNavigate } from "react-router-dom";
import carusel1 from './assets/carusel1.jpg'
import carusel2 from './assets/carusel2.jpg'
import './estilos.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './pages/Login';
import { signOut } from "firebase/auth";
import "./firebase";

export default function Home() {

    const navigate = useNavigate(); // <-- hook para redireccionar

    return (
        <>

            <div className='NOSObody'>
                {/* BANNER */}

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
                                            <Link className="nav-link" to="/Login">Dashboard</Link>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>








                <div >
                    <h1 className="letra  text-center p-5s mt-5 mb-4 ">BIENVENIDOS A NUESTRO ESPACIO DIGITAL</h1>

                    <div className="present mb-4">
                        <p className="text-center letra2  ">Somos Las Full Stackers, una comunidad de mujeres apasionadas por el
                            desarrollo web de
                            principio a fin. Dominamos tanto el frontend como el backend, y creemos en el poder de la tecnología
                            para
                            cambiar realidades. Creamos, construimos y conectamos ideas que transforman el mundo digital con
                            visión,
                            talento y determinación femenina.</p>
                    </div>
                    {/* CARRUSEL */}

                    <div id="carouselExample" className="carousel slide nose">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://img.freepik.com/vector-premium/grupo-chicas-jovenes-mostrando-orgullo-sus-aplicaciones-juegos-rompiendo-estereotipos-e-inspirando_216520-115797.jpg?semt=ais_hybrid&w=740" className="d-block w-100 imagen" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={carusel1} className="d-block w-100 imagen" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={carusel2} className="d-block w-100 imagen" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div>
                        <h2 className="letra text-center p-5s mt-5 tamaño2">NUESTRA IDENTIDAD </h2>
                    </div>

                    <div className="mt-5 present2">

                        <p className="m-5 letra2 text-center">Vivimos la programación como un arte y un reto constante. Somos un
                            equipo que domina cada
                            capa del
                            desarrollo, del frontend al backend, creando soluciones que combinan funcionalidad, diseño y
                            propósito. Nos mueve la curiosidad, la colaboración y el deseo de que la tecnología sea una
                            herramienta para mejorar vidas. Queremos inspirar a más mujeres a conquistar el mundo tech,
                            demostrando que el talento no tiene género y que la innovación florece cuando trabajamos juntas, sin
                            límites y sin fronteras.</p>
                    </div>

                    <div className="container my-1 row g-4 ">
                        <h2 className="letra text-center tamaño2">CONOCENOS</h2>
                        {/* MIS CARTILLAS */}

                        <div className="col-md-4 ">
                            <div className="card h-100 shadow-sm bode ">
                                <div className="card-body text-center cartilla rounded-5 ">
                                    <h5 className="card-title">Maricielo Narro Huarac / Desarrolladora Fronted
                                    </h5>
                                    <p className="card-text ">
                                        Me apasionada transformar ideas en interfaces atractivas, funcionales y fáciles de usar.
                                        Mi trabajo se centra en construir la parte visual e interactiva de las aplicaciones web,
                                        asegurando que cada detalle sea intuitivo y accesible para el usuario.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm bode">
                                <div className="card-body text-center cartilla rounded-5 ">
                                    <h5 className="card-title">Alejandra Pajuelo Coveñas / Líder de Diseño </h5>
                                    <p className="card-text">
                                        Me apasiona transformar ideas en experiencias visuales atractivas, coherentes y
                                        memorables.
                                        Mi trabajo se centra en liderar el diseño de interfaces y productos digitales,
                                        asegurando que cada detalle sea intuitivo, accesible y alineado con los objetivos del
                                        proyecto.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm bode">
                                <div className="card-body text-center cartilla rounded-5">
                                    <h5 className="card-title">Nayeli Zelaya Calderon / DESARROLLADORA AUTODIDACTA

                                    </h5>
                                    <p className="card-text">
                                        Soy una desarrolladora autodidacta, apasionada por el aprendizaje constante y la
                                        creación
                                        de soluciones digitales.
                                        Mi camino en la programación nació de la curiosidad y la disciplina, lo que me permitió
                                        adquirir habilidades por mi cuenta y convertirme en alguien capaz de transformar ideas
                                        en proyectos funcionales y atractivos.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm bode">
                                <div className="card-body text-center cartilla rounded-5">
                                    <h5 className="card-title">Alessandra Mateo Céspedes/Creatividad e Innovación IA</h5>
                                    <p className="card-text">
                                        Me apasiona explorar el potencial de la Inteligencia Artificial para impulsar la
                                        creatividad y la innovación.
                                        Mi trabajo se centra en diseñar soluciones que combinen tecnología, diseño y experiencia
                                        de usuario, aprovechando la IA como herramienta para generar ideas, optimizar procesos y
                                        crear productos digitales únicos.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm bode">
                                <div className="card-body text-center cartilla rounded-5">
                                    <h5 className="card-title">Adriana Santana/ Copywriter y redactora de contenidos web.
                                    </h5>
                                    <p className="card-text">
                                        Me apasiona transformar ideas en mensajes claros, creativos y persuasivos.
                                        Mi trabajo se centra en crear contenidos digitales que conecten con las personas y
                                        transmitan la esencia de cada marca, asegurando que cada palabra sea atractiva,
                                        funcional y fácil de comprender.
                                    </p>
                                </div>
                            </div>

                        </div>



                        <div className="text-center hijo">
                            <p>© 2025 LAS FULL STACKERS. Todos los derechos reservados.</p>
                            <i>
                                <p>Innovando el presente, programando el futuro.</p>
                            </i>
                        </div>




                    </div>

                </div>

            </div>
        </>
    );
}

