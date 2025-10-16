import React, { useState } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    birthday: "",
    city: "",
    gender: "",
    age: "",
    accepted: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // 🧠 Maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🧾 Validaciones básicas
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = "El email es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "El formato del email no es válido";

    if (!formData.password) newErrors.password = "La contraseña es obligatoria";
    else if (formData.password.length < 6)
      newErrors.password = "Debe tener al menos 6 caracteres";

    if (!formData.phone) newErrors.phone = "El teléfono es obligatorio";
    if (!formData.birthday) newErrors.birthday = "Selecciona tu fecha de nacimiento";
    if (!formData.city) newErrors.city = "La ciudad es obligatoria";
    if (!formData.gender) newErrors.gender = "Selecciona un género";
    if (!formData.age) newErrors.age = "Indica tu edad";
    if (!formData.accepted)
      newErrors.accepted = "Debes aceptar las condiciones";

    return newErrors;
  };

  // ✅ Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      console.log("Datos enviados:", formData);
      setFormData({
        email: "",
        password: "",
        phone: "",
        birthday: "",
        city: "",
        gender: "",
        age: "",
        accepted: false,
      });
    } else {
      setSuccess(false);
    }
  };

  return (
    <>
      <div className="letra text-center mt-5">
        <h2>REGÍSTRATE PARA MÁS INFORMACIÓN</h2>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5">
        <form
          onSubmit={handleSubmit}
          className="row g-3 container p-4 border rounded bg-light"
          style={{ maxWidth: "600px" }}
        >
          {/* Email */}
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="inputEmail4"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Password */}
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="inputPassword4"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          {/* Teléfono */}
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">
              Teléfono
            </label>
            <input
              type="tel"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              id="inputPhone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ej: 123-456-7890"
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          {/* Fecha de cumpleaños */}
          <div className="col-12">
            <label htmlFor="inputBirthday" className="form-label">
              Fecha de cumpleaños
            </label>
            <input
              type="date"
              className={`form-control ${errors.birthday ? "is-invalid" : ""}`}
              id="inputBirthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
            />
            {errors.birthday && <div className="invalid-feedback">{errors.birthday}</div>}
          </div>

          {/* Ciudad */}
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className={`form-control ${errors.city ? "is-invalid" : ""}`}
              id="inputCity"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <div className="invalid-feedback">{errors.city}</div>}
          </div>

          {/* Género */}
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Género
            </label>
            <select
              id="inputState"
              className={`form-select ${errors.gender ? "is-invalid" : ""}`}
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Selecciona...</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
            {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
          </div>

          {/* Edad */}
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Edad
            </label>
            <input
              type="text"
              className={`form-control ${errors.age ? "is-invalid" : ""}`}
              id="inputZip"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <div className="invalid-feedback">{errors.age}</div>}
          </div>

          {/* Aceptar condiciones */}
          <div className="col-12">
            <div className="form-check">
              <input
                className={`form-check-input ${errors.accepted ? "is-invalid" : ""}`}
                type="checkbox"
                id="gridCheck"
                name="accepted"
                checked={formData.accepted}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Acepto las condiciones
              </label>
              {errors.accepted && (
                <div className="invalid-feedback d-block">{errors.accepted}</div>
              )}
            </div>
          </div>

          {/* Botón */}
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>

          {/* Mensaje de éxito */}
          {success && (
            <div className="alert alert-success text-center mt-3" role="alert">
              ✅ ¡Registro exitoso! Gracias por tu información.
            </div>
          )}
        </form>
      </div>
    </>
  );
}
