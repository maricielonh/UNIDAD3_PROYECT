// src/pages/Dashboard.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useEquipo } from "../hooks/useEquipo";
import {
  createIntegrante,
  updateIntegrante,
  deleteIntegrante,
} from "../services/equipoService";
import { Link } from "react-router-dom";
import "../MARICIELO.css";

export default function Dashboard() {
  const { user } = useAuth();
  if (!user) {
    return <div className="p-3">Cargando usuario…</div>;
  }

  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");

  const [editingId, setEditingId] = useState(null);


  const { equipo, loading } = useEquipo(user.uid);

  const resetForm = () => {
    setNombre("");
    setRol("");
    setDescripcion("");
    setImagen("");
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !rol || !descripcion || !imagen) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      if (editingId) {
        await updateIntegrante(editingId, {
          nombre,
          rol,
          descripcion,
          imagen,
        });
      } else {
        await createIntegrante(user.uid, {
          nombre,
          rol,
          descripcion,
          imagen,
        });
      }

      resetForm();
    } catch (error) {
      console.error(error);
      alert("Error al guardar integrante");
    }
  };

  const handleEdit = (persona) => {
    setNombre(persona.nombre);
    setRol(persona.rol);
    setDescripcion(persona.descripcion);
    setImagen(persona.imagen);
    setEditingId(persona.id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "¿Seguro que deseas eliminar esta integrante?"
    );
    if (!confirmDelete) return;

    try {
      await deleteIntegrante(id);
    } catch (error) {
      console.error(error);
      alert("Error al eliminar integrante");
    }
  };



  return (
    <>
      <div className="  NOSObody">

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

        {/* Encabezado */}
        <div className="mb-4">
          <h1 className="fw-bold">Dashboard – Gestión de Nosotras</h1>
          <p className="text-muted">
            Sesión iniciada como{" "}
            <span className="fw-semibold">
              {user?.displayName || user?.email || "Usuario"}
            </span>

          </p>
        </div>

        {/* Grid principal */}
        <div className="row g-4">

          {/* Formulario */}
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  {editingId ? "Editar integrante" : "Nueva integrante"}
                </h5>

                <form onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label className="form-label">Nombre de la Integrante</label>
                    <input
                      type="text"
                      className="form-control"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Ej. Maricielo Narro"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Rol</label>
                    <input
                      type="text"
                      className="form-control"
                      value={rol}
                      onChange={(e) => setRol(e.target.value)}
                      placeholder="Ej. Desarrolladora Frontend"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                      placeholder="Describe brevemente su perfil"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Imagen (URL)</label>
                    <input
                      type="text"
                      className="form-control"
                      value={imagen}
                      onChange={(e) => setImagen(e.target.value)}
                      placeholder="https://..."
                    />
                  </div>


                  <button type="submit" className="btn btn-primary me-2">
                    {editingId ? "Actualizar" : "Guardar"}
                  </button>

                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="btn btn-outline-secondary"
                    >
                      Cancelar
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Listado */}
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">



                {loading ? (
                  <p className="text-muted">Cargando integrantes…</p>
                ) : equipo.length === 0 ? (
                  <p className="text-muted">Aún no hay integrantes registradas.</p>
                ) : (
                  <div className="list-group">

                    {equipo.map((persona) => (
                      <div
                        key={persona.id}
                        className="list-group-item d-flex justify-content-between align-items-start"
                      >

                        <img
                          src={persona.imagen}
                          alt={persona.nombre}
                          style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }}
                        />

                        <div className="flex-grow-1">
                          <h6 className="fw-bold">{persona.nombre}</h6>
                          <p className="mb-1 text-muted">{persona.rol}</p>
                          <p className="small">{persona.descripcion}</p>
                        </div>

                        <div className="d-flex flex-column gap-2">
                          <button
                            onClick={() => handleEdit(persona)}
                            className="btn btn-warning btn-sm"
                          >
                            Editar
                          </button>

                          <button
                            onClick={() => handleDelete(persona.id)}
                            className="btn btn-danger btn-sm"
                          >
                            Eliminar
                          </button>
                        </div>

                      </div>
                    ))}

                  </div>
                )}

                <div className="text-end mt-4">
                  <Link to="/">
                    <button className="btn btn-primary">
                      Volver a Chicas Tec
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )

}

