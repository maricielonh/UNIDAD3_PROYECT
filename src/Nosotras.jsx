//Importa tus imágenes desde la carpeta src/assets/



import LOGO from "./assets/LOGO.jpg";
import MARICIELO from "./assets/MARICIELO.png";
import ALEJANDRA from "./assets/ALEJANDRA.jpg";
import NAYELI from "./assets/NAYELI.jpg";
import ADRIANA from "./assets/ADRIANA.jpg";
import './ALEJANDRA1.css';
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEquipo } from "./hooks/useEquipo";



export default function Nosotras() {
    const { equipo, loading } = useEquipo();
    return (
        <>

            <div className="NOSObody">

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

                <div className="NOSOcontainer micontenedor">
                    <div>
                        <h1 className="text-center display-5 NOSOletra mt-5 mb-4">
                            <i>CONOCE MÁS SOBRE NOSOTRAS</i>
                        </h1>
                    </div>

                    <div className="NOSOcontainer text-center NOSOpresent2">
                        <p className="display-7 NOSOletra2">
                            Somos un equipo de cinco chicas apasionadas por la programación y el
                            diseño web. Combinamos creatividad, estrategia y tecnología para
                            construir soluciones digitales funcionales, atractivas y centradas
                            en el usuario. Cada una aporta una perspectiva única que en conjunto
                            impulsa proyectos con identidad, eficiencia y propósito.
                        </p>
                    </div>
                </div>

                <div className="container-hijo mt-5 mb-5">
                    <h2 className="text-center NOSOletra">Nuestra Trayectoria</h2>
                </div>

                <div className="row mb-4 text-center justify-content-center">



                    {/* Persona 1 */}
                    <div className="col-auto">
                        <div className="NOSOcard shadow">
                            <img src={MARICIELO} className="card-img-top NOSOperson-img" alt="Maricielo Narro" />
                            <div className="card-body ">
                                <h4>Maricielo Narro</h4>
                                <h5 className="card-title">DESARROLLADORA FRONTEND</h5>
                                <p className="card-text">
                                    Mi Path:Empecé en la programación motivada por la curiosidad y encontré en ella una forma de crear soluciones prácticas y escalables. Hoy me especializo en el desarrollo web moderno, construyendo interfaces intuitivas y sistemas sólidos que aportan valor real. Stack tecnológico: React, TypeScript, Node.js, CSS-in-JS, Git Capacidad: Traducir diseños en código limpio y eficiente, con un enfoque en calidad, rendimiento y escalabilidad.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Persona 2 */}
                    <div className="col-auto">
                        <div className="NOSOcard shadow">
                            <img src={ALEJANDRA} className="card-img-top NOSOperson-img" alt="Alejandra Pajuelo" />
                            <div className="card-body">
                                <h4>Alejandra Pajuelo</h4>
                                <h5 className="card-title">LÍDER DE DISEÑO</h5>
                                <p className="card-text">
                                    Mi Path:Soy una estudiante de secundaria, que por lo peliculiar me encanta diseñar,decorar y ser muy creativa, algo que llamo mi atencion, el diseño web,entrando al mundo digital, supe que había encontrado algo que realmente me apasiona. Herramientas favoritas:Diseño responsivo,Animaciones web,CSS y JavaScript. Capacidad:Convierto ideas en diseños web modernos, creativos y visualmente impactantes,convirtiendola en una experiencia web funcional y coherente.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Persona 3 */}
                    <div className="col-auto">
                        <div className="NOSOcard shadow">
                            <img src={NAYELI} className="card-img-top NOSOperson-img" alt="Nayeli Zelaya" />
                            <div className="card-body">
                                <h4>Shanty Kiran Valdez Cerna</h4>
                                <h5 className="card-title">DESARROLLADORA AUTODIDACTA</h5>
                                <p className="card-text">
                                    Mi Path: Soy estudiante de secundaria con una gran pasión por la tecnología y la programación. Aprendo por mi cuenta, explorando nuevas herramientas y creando proyectos que convierten mis ideas en soluciones reales. Especialidades: Visual Studio Code, Git, MySQL, Canva Capacidad: Aprender rápido, adaptarme a nuevos desafíos y transformar ideas en proyectos funcionales con un toque creativo.
                                </p>
                            </div>
                        </div>
                    </div>




                    {/* Persona 4 */}
                    <div className="col-auto">
                        <div className="NOSOcard shadow">
                            <img src={ADRIANA} className="card-img-top NOSOperson-img" alt="Adriana Santana" />
                            <div className="card-body">
                                <h4>Fiorella Fabiana Cutipa Rios</h4>
                                <h5 className="card-title">REDACTORA DE CONTENIDO WEB</h5>
                                <p className="card-text">
                                    My Path:Mientras estudiaba y me tocaba hacer muchos trabajos de investigación. Descubrí que lo que más disfrutaba no era recopilar información, sino encontrar la forma más clara y atractiva de presentarla.Con el tiempo, esa curiosidad se convirtió en una pasión profesional. Herramientas preferidas:Grammarly, Google Docs, WordPress, Ahrefs y Ubersuggest. Capacidad:La adaptabilidad: sé cómo ajustar el tono, estilo y enfoque del contenido según el público, el medio y el objetivo de cada proyecto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>





                {/* NUEVAS INTEGRANTES (DESDE DASHBOARD) */}
                <div className="container-hijo mt-5 mb-5">
                    <h2 className="text-center NOSOletra">
                        Integrantes del Equipo
                    </h2>
                </div>

                <div className="row mb-4 text-center justify-content-center">
                    {loading && <p>Cargando integrantes...</p>}

                    {!loading && equipo.length === 0 && (
                        <p>Aún no hay integrantes registradas.</p>
                    )}

                    {!loading &&
                        equipo.map((persona) => (
                            <div className="col-auto" key={persona.id}>
                                <div className="NOSOcard shadow">
                                    <img
                                        src={persona.imagen}
                                        className="card-img-top NOSOperson-img"
                                        alt={persona.nombre}
                                    />
                                    <div className="card-body">
                                        <h4>{persona.nombre}</h4>
                                        <h5 className="card-title">{persona.rol}</h5>
                                        <p className="card-text">{persona.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>



                {/* Metodologías */}
                <div className="NOSOcontainer seccion text-center">
                    <h1><i>METODOLOGÍAS</i></h1>
                    <p>Estas son algunas metodologías clave que aplicamos en nuestros proyectos:</p>

                    <div className="cuadros-metodologia">
                        <div className="metodo-box movible active-box">
                            <h5>🌍 Impacto Social</h5>
                            <p>
                                Evaluamos cómo nuestras soluciones tecnológicas afectan positivamente a la sociedad.Consideramos factores sociales, éticos y ambientales desde la fase de diseño, asegurando que cada proyecto tenga un propósito más allá de lo funcional.
                            </p>
                        </div>

                        <div className="metodo-box movible active-box">
                            <h5>🧠 Design Thinking</h5>
                            <p>
                                Una metodología centrada en el usuario para resolver problemas de forma creativa.A través de la observación, la ideación y la experimentación, logramos generar soluciones innovadoras que responden verdaderamente a las necesidades de los usuarios.
                            </p>
                        </div>

                        <div className="metodo-box movible active-box">
                            <h5>⚙️ Scrum</h5>
                            <p>
                                Aplicamos metodologías ágiles para trabajar colaborativamente y entregar valor.Esta metodología promueve la adaptabilidad, la transparencia y el trabajo en equipo, logrando resultados más eficientes y ajustados a los objetivos del usuario
                            </p>
                        </div>

                        <div className="metodo-box movible active-box">
                            <h5>👁️ UX/UI Design</h5>
                            <p>
                                Diseñamos interfaces enfocadas en la experiencia del usuario y usabilidad.Nos aseguramos de que cada diseño sea intuitivo, accesible, responsivo y alineado con los objetivos del negocio y las expectativas del usuario final.
                            </p>
                        </div>
                    </div>
                </div>


                <Quiz></Quiz>



                {/* Footer */}
                <div className="NOSOrow seccion text-center">
                    <div className="col">
                        <img src={LOGO} alt="Logo Full Stackers" style={{ width: "150px", height: "auto" }} />
                        <p>© 2025 Full Stackers. Todos los derechos reservados.</p>
                        <h5 className="NOSOfrase">"Tu visión. Nuestro stack. Un solo equipo."</h5>
                    </div>
                </div>





            </div >
        </>
    );
}
