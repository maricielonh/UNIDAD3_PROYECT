// src/pages/Dashboard.jsx
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { useCourses } from "../hooks/useCourses";
import {
  createCourse,
  updateCourse,
  deleteCourseById,
} from "../services/courseService";

import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [nivel, setNivel] = useState("Básico");

  const [editingId, setEditingId] = useState(null);
  const [filtroNivel, setFiltroNivel] = useState("Todos");

  const { cursos, loadingCursos } = useCourses(user?.uid);

  const resetForm = () => {
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setNivel("Básico");
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim() || !descripcion.trim() || !precio) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    try {
      const precioNumber = Number(precio);

      if (isNaN(precioNumber)) {
        alert("El precio debe ser numérico.");
        return;
      }

      if (editingId) {
        await updateCourse(editingId, {
          nombre,
          descripcion,
          precio: precioNumber,
          nivel,
        });
      } else {
        await createCourse(user.uid, {
          nombre,
          descripcion,
          precio: precioNumber,
          nivel,
        });
      }

      resetForm();
    } catch (error) {
      console.error("Error al guardar curso:", error);
      alert("Ocurrió un error al guardar el curso.");
    }
  };

  const handleEdit = (curso) => {
    setNombre(curso.nombre);
    setDescripcion(curso.descripcion);
    setPrecio(curso.precio);
    setNivel(curso.nivel || "Básico");
    setEditingId(curso.id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "¿Seguro que deseas eliminar este curso?"
    );
    if (!confirmDelete) return;

    try {
      await deleteCourseById(id);
    } catch (error) {
      console.error("Error al eliminar curso:", error);
      alert("Ocurrió un error al eliminar el curso.");
    }
  };

  const cursosFiltrados =
    filtroNivel === "Todos"
      ? cursos
      : cursos.filter((c) => c.nivel === filtroNivel);

  return (
    <div className="container py-4">

      {/* Encabezado */}
      <div className="mb-4">
        <h1 className="fw-bold">Dashboard – Gestión de cursos</h1>
        <p className="text-muted">
          Sesión iniciada como{" "}
          <span className="fw-semibold">{user.displayName || user.email}</span>.
        </p>
      </div>

      {/* Grid principal */}
      <div className="row g-4">

        {/* Formulario */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                {editingId ? "Editar curso" : "Nuevo curso"}
              </h5>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Nombre del curso</label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Fundamentos de Ciencia de Datos"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Describe brevemente el contenido del curso"
                  />
                </div>

                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Precio (MXN)</label>
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      step="0.01"
                      value={precio}
                      onChange={(e) => setPrecio(e.target.value)}
                      placeholder="Ej. 1990"
                    />
                  </div>

                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Nivel</label>
                    <select
                      className="form-select"
                      value={nivel}
                      onChange={(e) => setNivel(e.target.value)}
                    >
                      <option value="Básico">Básico</option>
                      <option value="Intermedio">Intermedio</option>
                      <option value="Avanzado">Avanzado</option>
                    </select>
                  </div>
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

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="card-title">Mis cursos</h5>
                </div>

                <div>
                  <label className="form-label small">Filtrar por nivel</label>
                  <select
                    className="form-select form-select-sm"
                    value={filtroNivel}
                    onChange={(e) => setFiltroNivel(e.target.value)}
                  >
                    <option value="Todos">Todos</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>
              </div>

              {loadingCursos ? (
                <p className="text-muted">Cargando cursos…</p>
              ) : cursosFiltrados.length === 0 ? (
                <p className="text-muted">
                  Aún no tienes cursos registrados.
                </p>
              ) : (
                <div className="list-group">

                  {cursosFiltrados.map((curso) => (
                    <div
                      key={curso.id}
                      className="list-group-item d-flex justify-content-between align-items-start"
                    >
                      <div>
                        <h6 className="fw-bold">{curso.nombre}</h6>
                        <p className="mb-1 small text-muted">
                          {curso.descripcion}
                        </p>

                        <span className="badge bg-primary me-2">
                          Nivel: {curso.nivel}
                        </span>

                        <span className="badge bg-success">
                          Precio: ${curso.precio}
                        </span>
                      </div>

                      <div className="ms-3 d-flex flex-column gap-2">
                        <button
                          onClick={() => handleEdit(curso)}
                          className="btn btn-warning btn-sm"
                        >
                          Editar
                        </button>

                        <button
                          onClick={() => handleDelete(curso.id)}
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
  );
}
