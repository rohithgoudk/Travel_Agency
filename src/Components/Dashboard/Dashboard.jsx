import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>My Trips</h1>

      <div className="trip-grid">

        <div className="trip-card">
          <h3>Maldives Escape</h3>
          <p>12 June 2026</p>
        </div>

        <div className="trip-card">
          <h3>Paris Tour</h3>
          <p>22 July 2026</p>
        </div>

        <div className="trip-card">
          <h3>Swiss Adventure</h3>
          <p>14 August 2026</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;