// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Maricielo.css";


export default function Login() {
  const { login, register, resetPassword, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      if (mode === "login") {
        await login({ email: form.email, password: form.password });
        navigate("/Dashboard");
      } else if (mode === "register") {
        await register({
          email: form.email,
          password: form.password,
          displayName: form.displayName,
        });
        navigate("/Dashboard");
      } else if (mode === "reset") {
        await resetPassword(form.email);
        alert("Se ha enviado un correo para restablecer tu contraseña.");
      }
    } catch (err) {
      console.error(err);
      let msg = "Ocurrió un error. Verifica tus datos.";

      if (err.code === "auth/user-not-found") {
        msg = "No existe una cuenta con ese correo.";
      } else if (err.code === "auth/wrong-password") {
        msg = "Contraseña incorrecta.";
      } else if (err.code === "auth/email-already-in-use") {
        msg = "Este correo ya está registrado.";
      } else if (err.code === "auth/invalid-email") {
        msg = "El correo no es válido.";
      } else if (err.code === "auth/weak-password") {
        msg = "La contraseña es demasiado débil.";
      }

      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setSubmitting(true);
    try {
      await loginWithGoogle();
      navigate("/Dashboard");
    } catch (err) {
      console.error(err);
      setError("No se pudo iniciar sesión con Google.");
    } finally {
      setSubmitting(false);
    }
  };

  return (

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






      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
        <div className="col-12 col-md-6 col-lg-4 p-4 shadow rounded bg-white">

          <h3 className="text-center mb-2">Acceso a panel administrativo</h3>
          <p className="text-center text-muted small">
            Inicia sesión para gestionar los cursos del catálogo público.
          </p>

          {/* Botones de modo */}
          <div className="btn-group w-100 mb-3">
            <button
              className={`btn btn-sm ${mode === "login" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setMode("login")}
            >
              Entrar
            </button>
            <button
              className={`btn btn-sm ${mode === "register" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setMode("register")}
            >
              Crear cuenta
            </button>
            <button
              className={`btn btn-sm ${mode === "reset" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setMode("reset")}
            >
              Recuperar
            </button>
          </div>

          {error && (
            <div className="alert alert-danger small py-2">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {mode === "register" && (
              <div className="mb-3">
                <label className="form-label small">Nombre</label>
                <input
                  name="displayName"
                  value={form.displayName}
                  onChange={onChange}
                  className="form-control form-control-sm"
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label small">Correo</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="form-control form-control-sm"
                required
              />
            </div>

            {mode !== "reset" && (
              <div className="mb-3">
                <label className="form-label small">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  className="form-control form-control-sm"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary w-100"
            >
              {submitting
                ? "Procesando..."
                : mode === "login"
                  ? "Entrar"
                  : mode === "register"
                    ? "Crear cuenta"
                    : "Enviar enlace de recuperación"}
            </button>
          </form>

          <button
            type="button"
            disabled={submitting}
            onClick={handleGoogleLogin}
            className="btn btn-outline-secondary w-100 mt-3 d-flex align-items-center justify-content-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              style={{ width: "20px", height: "20px" }}
            />
            Iniciar sesión con Google
          </button>

        </div>
      </div>
    </div>
  );
}
