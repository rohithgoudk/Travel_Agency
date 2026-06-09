import {
    FaPlane,
    FaHeart,
    FaCreditCard,
    FaCog,
    FaBell,
    FaSuitcaseRolling,
    FaUserCircle
  } from "react-icons/fa";
  
  import "./Dashboard.css";
  
  function UserDashboard() {
    return (
      <div className="dashboard-layout">
  
        {/* Sidebar */}
  
        <aside className="sidebar">
  
          <div className="logo-area">
            ✈ TravelGo
          </div>
  
          <ul>
            <li className="active">
              <FaPlane /> Dashboard
            </li>
  
            <li>
              <FaSuitcaseRolling /> My Trips
            </li>
  
            <li>
              <FaHeart /> Wishlist
            </li>
  
            <li>
              <FaCreditCard /> Payments
            </li>
  
            <li>
              <FaCog /> Settings
            </li>
          </ul>
  
        </aside>
  
        {/* Main */}
  
        <main className="dashboard-main">
  
          <header className="topbar">
  
            <input
              type="text"
              placeholder="Search destinations..."
            />
  
            <div className="top-icons">
              <FaBell />
              <FaUserCircle />
            </div>
  
          </header>
  
          {/* Stats */}
  
          <section className="stats-grid">
  
            <div className="stat-card">
              <h3>12</h3>
              <p>Total Trips</p>
            </div>
  
            <div className="stat-card">
              <h3>3</h3>
              <p>Upcoming Trips</p>
            </div>
  
            <div className="stat-card">
              <h3>₹1,24,000</h3>
              <p>Total Spent</p>
            </div>
  
            <div className="stat-card">
              <h3>860</h3>
              <p>Loyalty Points</p>
            </div>
  
          </section>
  
          {/* Main Grid */}
  
          <section className="content-grid">
  
            <div className="card large-card">
              <h2>Upcoming Journey</h2>
  
              <div className="trip-highlight">
                <h3>Bali, Indonesia</h3>
                <p>15 July 2026</p>
                <span>Confirmed</span>
              </div>
            </div>
  
            <div className="card">
              <h2>Travel Progress</h2>
  
              <div className="chart-placeholder">
                Chart Area
              </div>
            </div>
  
          </section>
  
          <section className="card">
            <h2>Recent Bookings</h2>
  
            <table>
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
  
              <tbody>
                <tr>
                  <td>Dubai</td>
                  <td>20 Jun 2026</td>
                  <td>Confirmed</td>
                </tr>
  
                <tr>
                  <td>Thailand</td>
                  <td>15 Aug 2026</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </section>
  
        </main>
  
      </div>
    );
  }
  
  export default UserDashboard;