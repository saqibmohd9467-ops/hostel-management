import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  BedDouble,
  Home,
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-md transition text-sm font-medium ${
      isActive(path)
        ? "bg-white text-blue-600"
        : "text-white hover:bg-blue-500"
    }`;

  return (
    <div className="w-64 bg-blue-600 min-h-screen p-6 shadow-lg hidden md:block">
      
      {/* Logo / Title */}
      <h2 className="text-2xl font-bold text-white mb-10 tracking-wide">
        Admin Panel
      </h2>

      <ul className="space-y-2">

        <li>
          <Link
            to="/admin/dashboard"
            className={linkClasses("/admin/dashboard")}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/admin/roomstypes"
            className={linkClasses("/admin/roomstypes")}
          >
            <Building2 size={18} />
            Room Types
          </Link>
        </li>

        <li>
          <Link
            to="/admin/rooms"
            className={linkClasses("/admin/rooms")}
          >
            <BedDouble size={18} />
            Rooms
          </Link>
        </li>

        <li>
          <Link
            to="/admin/rentrooms"
            className={linkClasses("/admin/rentrooms")}
          >
            <Home size={18} />
            Rent Room
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default AdminSidebar;
