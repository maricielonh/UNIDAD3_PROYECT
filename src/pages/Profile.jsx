// src/pages/Profile.jsx
import { useAuth } from "../auth/AuthProvider";

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    // En teoría no deberías llegar aquí porque la ruta va protegida,
    // pero por seguridad dejamos este guard.
    return null;
  }

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-md border border-slate-100 p-6">
        <h1 className="text-xl font-semibold text-slate-900 mb-2">
          Perfil de usuario
        </h1>
        <p className="text-xs text-slate-500 mb-4">
          Información básica de tu cuenta autenticada.
        </p>

        <div className="space-y-4 text-sm">
          <div>
            <p className="text-xs font-medium text-slate-600">Nombre</p>
            <p className="text-slate-900">
              {user.displayName || "Sin nombre configurado"}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-600">Correo</p>
            <p className="text-slate-900">{user.email}</p>
          </div>

          {user.photoURL && (
            <div>
              <p className="text-xs font-medium text-slate-600 mb-1">
                Foto de perfil
              </p>
              <img
                src={user.photoURL}
                alt="Avatar"
                className="w-16 h-16 rounded-full border border-slate-200 object-cover"
              />
            </div>
          )}

          <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 mt-2">
            Estos datos provienen directamente de Firebase Authentication.
          </p>
        </div>
      </div>
    </div>
  );
}