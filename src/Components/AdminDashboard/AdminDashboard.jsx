import { useState } from "react";
import {
  FaUsers, FaPlaneDeparture, FaMapMarkedAlt, FaMoneyBillWave,
  FaBell, FaUserCircle, FaChartLine, FaSearch, FaEnvelope,
  FaArrowUp, FaArrowDown
} from "react-icons/fa";
import Sidebar from "../SideBar/SideBar";
import "./AdminDashboard.css";

const recentBookings = [
  { name: "Rohith K.", destination: "Bali", date: "Jun 8", status: "Confirmed" },
  { name: "John M.", destination: "Paris", date: "Jun 9", status: "Pending" },
  { name: "Sophia R.", destination: "Dubai", date: "Jun 9", status: "Confirmed" },
  { name: "Arjun P.", destination: "Singapore", date: "Jun 10", status: "Pending" },
  { name: "Meera S.", destination: "Maldives", date: "Jun 10", status: "Cancelled" },
];

const topDestinations = [
  { name: "Bali", pct: 78, color: "#378ADD" },
  { name: "Dubai", pct: 65, color: "#534AB7" },
  { name: "Paris", pct: 54, color: "#1D9E75" },
  { name: "Maldives", pct: 42, color: "#D85A30" },
  { name: "Singapore", pct: 35, color: "#884FB9" },
];

const quickStats = [
  { package: "Bali Bliss", bookings: 312, revenue: "₹4.8L" },
  { package: "Dubai Delight", bookings: 278, revenue: "₹5.2L" },
  { package: "Paris Romance", bookings: 215, revenue: "₹3.9L" },
  { package: "Maldives Lux", bookings: 180, revenue: "₹2.9L" },
  { package: "Singapore City", bookings: 260, revenue: "₹1.7L" },
];

const recentActivity = [
  { type: "success", icon: "✓", text: <>Booking <b>#1245</b> confirmed for <b>Bali</b></>, time: "2 min ago" },
  { type: "info", icon: "+", text: <>New customer <b>Arjun P.</b> registered</>, time: "18 min ago" },
  { type: "warning", icon: "⏱", text: <>Package <b>Maldives Luxury</b> payment pending</>, time: "45 min ago" },
  { type: "danger", icon: "✕", text: <>Booking <b>#1241</b> cancelled — Maldives</>, time: "1 hr ago" },
  { type: "purple", icon: "★", text: <>New 5-star review for <b>Singapore tour</b></>, time: "3 hr ago" },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const revData = [9.2, 11.5, 8.8, 13.1, 10.4, 18.5];
const maxRev = Math.max(...revData);

const donutData = [
  { label: "Holiday", val: 42, color: "#378ADD" },
  { label: "Business", val: 28, color: "#534AB7" },
  { label: "Adventure", val: 18, color: "#1D9E75" },
  { label: "Honeymoon", val: 12, color: "#D85A30" },
];

function DonutChart() {
  const cx = 45, cy = 45, r = 34, holeR = 20;
  let start = -Math.PI / 2;
  const slices = donutData.map((d) => {
    const angle = (d.val / 100) * 2 * Math.PI;
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(start + angle);
    const y2 = cy + r * Math.sin(start + angle);
    const large = angle > Math.PI ? 1 : 0;
    const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
    start += angle;
    return { ...d, path };
  });

  return (
    <div className="donut-area">
      <svg width="90" height="90" viewBox="0 0 90 90">
        {slices.map((s) => (
          <path key={s.label} d={s.path} fill={s.color} />
        ))}
        <circle cx={cx} cy={cy} r={holeR} fill="white" className="donut-hole" />
      </svg>
      <div className="donut-legend">
        {donutData.map((d) => (
          <div key={d.label} className="legend-item">
            <span className="legend-dot" style={{ background: d.color }} />
            <span>{d.label}</span>
            <span className="legend-val">{d.val}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const map = { Confirmed: "s-confirmed", Pending: "s-pending", Cancelled: "s-cancelled" };
  return <span className={`status ${map[status]}`}>{status}</span>;
}

export default function AdminDashboard() {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <div className="admin-layout">
      <Sidebar activeItem={activeItem} onNavigate={setActiveItem} />

      <main className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          
          <div className="topbar-right">
            <div className="search-box">
              <FaSearch />
              <input type="text" placeholder="Search…" />
            </div>
            <button className="icon-btn" aria-label="Notifications"><FaBell /></button>
            <button className="icon-btn" aria-label="Messages"><FaEnvelope /></button>
            <div className="avatar">AD</div>
          </div>
        </header>

        <div className="admin-content">
          {/* Metrics */}
          <section className="metrics-grid">
            <div className="metric-card">
              <div className="metric-top">
                <div className="metric-icon blue"><FaMoneyBillWave /></div>
                <span className="metric-badge badge-green"><FaArrowUp /> +12%</span>
              </div>
              <h3>₹18.5L</h3>
              <p>Total Revenue</p>
            </div>
            <div className="metric-card">
              <div className="metric-top">
                <div className="metric-icon green"><FaPlaneDeparture /></div>
                <span className="metric-badge badge-green"><FaArrowUp /> +8%</span>
              </div>
              <h3>1,245</h3>
              <p>Total Bookings</p>
            </div>
            <div className="metric-card">
              <div className="metric-top">
                <div className="metric-icon purple"><FaUsers /></div>
                <span className="metric-badge badge-green"><FaArrowUp /> +5%</span>
              </div>
              <h3>5,842</h3>
              <p>Customers</p>
            </div>
            <div className="metric-card">
              <div className="metric-top">
                <div className="metric-icon amber"><FaMapMarkedAlt /></div>
                <span className="metric-badge badge-red"><FaArrowDown /> -2%</span>
              </div>
              <h3>145</h3>
              <p>Destinations</p>
            </div>
          </section>

          {/* Revenue + Donut */}
          <section className="row-2">
            <div className="admin-card large">
              <div className="card-header">
                <h2>Revenue Analytics</h2>
                <select className="card-select">
                  <option>Last 6 months</option>
                  <option>Last 12 months</option>
                  <option>This year</option>
                </select>
              </div>
              <div className="chart-wrap">
                {revData.map((v, i) => (
                  <div
                    key={i}
                    className="bar"
                    style={{
                      height: `${Math.round((v / maxRev) * 100)}%`,
                      background: i === revData.length - 1 ? "#185FA5" : "#B5D4F4",
                    }}
                  />
                ))}
              </div>
              <div className="chart-labels">
                {months.map((m) => <span key={m}>{m}</span>)}
              </div>
            </div>

            <div className="admin-card">
              <div className="card-header"><h2>Bookings by type</h2></div>
              <DonutChart />
            </div>
          </section>

          {/* Tables row */}
          <section className="row-2">
            <div className="admin-card">
              <div className="card-header">
                <h2>Recent Bookings</h2>
                <button className="card-action">View all</button>
              </div>
              <table>
                <thead>
                  <tr><th>Customer</th><th>Destination</th><th>Date</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {recentBookings.map((b, i) => (
                    <tr key={i}>
                      <td>{b.name}</td>
                      <td>{b.destination}</td>
                      <td>{b.date}</td>
                      <td><StatusBadge status={b.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="admin-card">
              <div className="card-header">
                <h2>Top Destinations</h2>
                <button className="card-action">View all</button>
              </div>
              <div className="progress-list">
                {topDestinations.map((d) => (
                  <div key={d.name} className="prog-item">
                    <div className="prog-label">
                      <span>{d.name}</span>
                      <span className="prog-pct">{d.pct}%</span>
                    </div>
                    <div className="prog-bar-bg">
                      <div className="prog-bar-fill" style={{ width: `${d.pct}%`, background: d.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Activity + Quick Stats */}
          <section className="row-2">
            <div className="admin-card">
              <div className="card-header"><h2>Recent Activity</h2></div>
              <div className="activity-list">
                {recentActivity.map((a, i) => (
                  <div key={i} className="activity-item">
                    <div className={`act-icon act-${a.type}`}>{a.icon}</div>
                    <div className="act-body">
                      <div>{a.text}</div>
                      <div className="act-time">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-card">
              <div className="card-header"><h2>Quick Stats</h2></div>
              <table>
                <thead>
                  <tr><th>Package</th><th>Bookings</th><th>Revenue</th></tr>
                </thead>
                <tbody>
                  {quickStats.map((s, i) => (
                    <tr key={i}>
                      <td>{s.package}</td>
                      <td>{s.bookings}</td>
                      <td>{s.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}