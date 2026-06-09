import {
    FaUsers,
    FaPlaneDeparture,
    FaMapMarkedAlt,
    FaMoneyBillWave,
    FaBell,
    FaUserCircle,
    FaChartLine,
    FaCog
  } from "react-icons/fa";
  
  import "./AdminDashboard.css";
  
  function AdminDashboard() {
    return (
      <div className="admin-layout">
  
        {/* Sidebar */}
  
        <aside className="admin-sidebar">
  
          <div className="admin-logo">
            TravelGo Admin
          </div>
  
          <ul>
            <li className="active">
              <FaChartLine />
              Dashboard
            </li>
  
            <li>
              <FaMapMarkedAlt />
              Destinations
            </li>
  
            <li>
              <FaPlaneDeparture />
              Packages
            </li>
  
            <li>
              <FaUsers />
              Customers
            </li>
  
            <li>
              <FaCog />
              Settings
            </li>
          </ul>
  
        </aside>
  
        {/* Main */}
  
        <main className="admin-main">
  
          <header className="admin-topbar">
  
            <h2>Admin Dashboard</h2>
  
            <div className="admin-icons">
              <FaBell />
              <FaUserCircle />
            </div>
  
          </header>
  
          {/* Metrics */}
  
          <section className="metrics-grid">
  
            <div className="metric-card">
              <FaMoneyBillWave />
              <h3>₹18.5L</h3>
              <p>Total Revenue</p>
            </div>
  
            <div className="metric-card">
              <FaPlaneDeparture />
              <h3>1,245</h3>
              <p>Bookings</p>
            </div>
  
            <div className="metric-card">
              <FaUsers />
              <h3>5,842</h3>
              <p>Customers</p>
            </div>
  
            <div className="metric-card">
              <FaMapMarkedAlt />
              <h3>145</h3>
              <p>Destinations</p>
            </div>
  
          </section>
  
          {/* Analytics */}
  
          <section className="analytics-grid">
  
            <div className="admin-card large">
              <h2>Revenue Analytics</h2>
  
              <div className="chart-placeholder">
                Revenue Chart
              </div>
            </div>
  
            <div className="admin-card">
              <h2>Bookings Trend</h2>
  
              <div className="chart-placeholder">
                Trend Chart
              </div>
            </div>
  
          </section>
  
          {/* Recent Bookings */}
  
          <section className="admin-card">
            <h2>Recent Bookings</h2>
  
            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Destination</th>
                  <th>Status</th>
                </tr>
              </thead>
  
              <tbody>
                <tr>
                  <td>Rohith</td>
                  <td>Bali</td>
                  <td>Confirmed</td>
                </tr>
  
                <tr>
                  <td>John</td>
                  <td>Paris</td>
                  <td>Pending</td>
                </tr>
  
                <tr>
                  <td>Sophia</td>
                  <td>Dubai</td>
                  <td>Confirmed</td>
                </tr>
              </tbody>
            </table>
          </section>
  
        </main>
  
      </div>
    );
  }
  
  export default AdminDashboard;