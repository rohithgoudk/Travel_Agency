import { useState } from "react";
import {
  FaPlane, FaHeart, FaCreditCard, FaCog,
  FaSuitcaseRolling, FaMapMarkerAlt, FaTachometerAlt,
  FaSignOutAlt, FaTimes, FaBars, FaChartBar,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../assets/stacklyimg1.webp"

const navItems = [
  { icon: <FaTachometerAlt />, label: "Dashboard",    id: "dashboard" },
  { icon: <FaMapMarkerAlt />,  label: "Destinations", id: "destinations" },
  { icon: <FaSuitcaseRolling />, label: "Packages",   id: "packages" },
  { icon: <FaPlane />,         label: "Flights",      id: "flights" },
  { icon: <FaHeart />,         label: "Customers",    id: "customers" },
  { icon: <FaCreditCard />,    label: "Payments",     id: "payments" },
  { icon: <FaChartBar />,      label: "Reports",      id: "reports" },
  { icon: <FaCog />,           label: "Settings",     id: "settings" },
];

export default function Sidebar({ activeItem = "dashboard", onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (id) => {
    onNavigate?.(id);
    setMobileOpen(false);
  };

  return (
    <>
      <button
        className="hamburger-btn"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      {mobileOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
      )}

<aside className={`sidebar ${mobileOpen ? "sidebar--open" : ""}`}>

{/* Logo image placeholder */}
<div className="sidebar__logo">
  <img src={logo} alt="TravelGo Logo" className="sidebar__logo-img" />
</div>


{/* rest unchanged... */}

        <nav className="sidebar__nav">
          <ul>
            {navItems.map(({ icon, label, id }) => (
              <li
                key={id}
                className={activeItem === id ? "active" : ""}
                onClick={() => handleNav(id)}
              >
                <span className="nav-icon">{icon}</span>
                <span className="nav-label">{label}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar__footer">
          <button className="logout-btn" onClick={() => navigate("/")}>
            <FaSignOutAlt />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}