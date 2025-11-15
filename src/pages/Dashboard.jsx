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

  // 🔹 Cursos del usuario desde el hook reutilizable (tiempo real)
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
        // 🔸 Actualizar curso existente
        await updateCourse(editingId, {
          nombre,
          descripcion,
          precio: precioNumber,
          nivel,
        });
      } else {
        // 🔸 Crear nuevo curso
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
      // No tocamos estado: el listener (onSnapshot) refresca automáticamente
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
    <div className="min-h-[80vh] bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">
            Dashboard – Gestión de cursos
          </h1>
          <p className="text-sm text-slate-600">
            Sesión iniciada como{" "}
            <span className="font-medium">
              {user.displayName || user.email}
            </span>
            . Los cambios que hagas aquí se reflejan en el catálogo público de
            cursos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-1">
              {editingId ? "Editar curso" : "Nuevo curso"}
            </h2>
            <p className="text-sm text-slate-500 mb-4">
              Completa el formulario y guarda el registro. Se mostrará en la
              página pública de cursos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nombre del curso
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Ej. Fundamentos de Ciencia de Datos"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Descripción
                </label>
                <textarea
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                  placeholder="Describe brevemente el contenido del curso"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Precio (MXN)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Ej. 1990"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Nivel
                  </label>
                  <select
                    value={nivel}
                    onChange={(e) => setNivel(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  {editingId ? "Actualizar curso" : "Guardar curso"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
                  >
                    Cancelar edición
                  </button>
                )}
              </div>
            </form>
          </section>

          {/* Listado */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Mis cursos
                </h2>
                <p className="text-sm text-slate-500">
                  CRUD completo filtrado por tu usuario.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Filtrar por nivel
                </label>
                <select
                  value={filtroNivel}
                  onChange={(e) => setFiltroNivel(e.target.value)}
                  className="px-3 py-1 border rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Todos">Todos</option>
                  <option value="Básico">Básico</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>
              </div>
            </div>

            {loadingCursos ? (
              <p className="text-slate-500 text-sm">Cargando cursos…</p>
            ) : cursosFiltrados.length === 0 ? (
              <p className="text-slate-500 text-sm">
                Aún no tienes cursos registrados con este usuario.
              </p>
            ) : (
              <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                {cursosFiltrados.map((curso) => (
                  <article
                    key={curso.id}
                    className="border border-slate-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-indigo-100 hover:shadow-sm transition"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {curso.nombre}
                      </h3>
                      <p className="text-xs text-slate-500 mb-1">
                        {curso.descripcion}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                          Nivel: {curso.nivel}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                          Precio: ${curso.precio}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:flex-none">
                      <button
                        onClick={() => handleEdit(curso)}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-amber-400 text-slate-900 hover:bg-amber-500 transition"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(curso.id)}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-rose-500 text-white hover:bg-rose-600 transition"
                      >
                        Eliminar
                      </button>
                    </div>



                    <div style={{ textAlign: "right", margin: "20px" }}>
                      <Link to="/">
                        <button style={{
                          backgroundColor: "#007bff",
                          color: "white",
                          border: "none",
                          padding: "10px 20px",
                          borderRadius: "8px",
                          cursor: "pointer"
                        }}>
                          Volver a Chicas Tec
                        </button>
                      </Link>
                    </div>




                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}