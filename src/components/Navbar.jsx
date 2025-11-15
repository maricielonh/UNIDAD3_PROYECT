// src/components/Navbar.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path ? "text-indigo-600 font-semibold" : "text-gray-600";

  const handleLogout = async () => {
    await logout();
    navigate("/cursos");
  };

  return (
    <header className="bg-white/90 backdrop-blur border-b sticky top-0 z-20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Branding */}
        <Link to="/cursos" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
            MD
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-gray-800">
              MasterData App
            </span>
            <span className="text-[11px] text-gray-500">
              Cursos y analítica en tiempo real
            </span>
          </div>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4">
          <Link
            to="/cursos"
            className={`text-sm hover:text-indigo-600 ${isActive("/cursos")}`}
          >
            Cursos
          </Link>

          {user && (
            <>
              <Link
                to="/dashboard"
                className={`text-sm hover:text-indigo-600 ${isActive(
                  "/dashboard"
                )}`}
              >
                Dashboard
              </Link>
              <Link
                to="/perfil"
                className={`text-sm hover:text-indigo-600 ${isActive("/perfil")}`}
              >
                Perfil
              </Link>
            </>
          )}

          {/* Auth actions */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs text-gray-500 max-w-[180px] truncate">
                {user.displayName || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-full border text-xs font-medium text-gray-700 hover:bg-gray-100"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1.5 rounded-full bg-indigo-600 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}