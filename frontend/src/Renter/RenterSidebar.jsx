import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  BedDouble,
  CreditCard,
  LogOut,
} from "lucide-react";

const RenterSidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
      isActive(path)
        ? "bg-white text-blue-600"
        : "hover:bg-blue-500 text-white"
    }`;

  return (
    <div className="w-64 bg-blue-600 text-white p-6 hidden md:block shadow-lg">
      
      <h2 className="text-2xl font-bold mb-10 tracking-wide">
        Renter Panel
      </h2>

      <ul className="space-y-2 text-sm font-medium">

        <li>
          <Link
            to="/renter/dashboard"
            className={linkClasses("/renter/dashboard")}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/renter/profile"
            className={linkClasses("/renter/profile")}
          >
            <User size={18} />
            My Profile
          </Link>
        </li>

        <li>
          <Link
            to="/renter/room-details"
            className={linkClasses("/renter/room-details")}
          >
            <BedDouble size={18} />
            Room Details
          </Link>
        </li>

        <li>
          <Link
            to="/renter/payments"
            className={linkClasses("/renter/payments")}
          >
            <CreditCard size={18} />
            Payments
          </Link>
        </li>

        <li>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md w-full text-left hover:bg-red-500 transition">
            <LogOut size={18} />
            Logout
          </button>
        </li>

      </ul>
    </div>
  );
};

export default RenterSidebar;
