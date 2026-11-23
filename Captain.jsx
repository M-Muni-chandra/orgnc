import "./Captain.css";

export default function Captain() {
  return (
    <div className="captain-page">

      <aside className="captain-sidebar">
        <div className="captain-brand">
          <h2>ORGNC</h2>
          <span>CAPTAIN</span>
        </div>

        <nav>
          <p className="captain-nav-title">DELIVERY</p>
          <a className="active">Dashboard</a>
          <a>Delivery Requests</a>
          <a>Active Deliveries</a>
          <a>Delivery History</a>

          <p className="captain-nav-title">PERFORMANCE</p>
          <a>Earnings</a>
          <a>Performance Reports</a>

          <p className="captain-nav-title">ACCOUNT</p>
          <a>My Profile</a>
          <a>Settings</a>
          <a>Logout</a>
        </nav>

        <div className="captain-profile">
          <div className="captain-avatar">DC</div>
          <div>
            <strong>Delivery Captain</strong>
            <small>ORGNC Partner</small>
          </div>
        </div>
      </aside>

      <main className="captain-main">

        <header className="captain-header">
          <div>
            <p>ORGNC / CAPTAIN</p>
            <h1>Captain Dashboard</h1>
          </div>

          <div className="captain-status">
            <span></span> Available
          </div>
        </header>

        <section className="captain-welcome">
          <div>
            <p>DELIVERY PARTNER PORTAL</p>
            <h2>Welcome to ORGNC Captain</h2>
            <p>
              Manage delivery requests, track your active orders
              and monitor your delivery performance.
            </p>
          </div>

          <div className="captain-welcome-icon">➤</div>
        </section>

        <section className="captain-stats">

          <div className="captain-stat-card">
            <span>Today's Deliveries</span>
            <h2>--</h2>
            <small>Completed deliveries today</small>
          </div>

          <div className="captain-stat-card">
            <span>Pending Requests</span>
            <h2>--</h2>
            <small>Awaiting your response</small>
          </div>

          <div className="captain-stat-card">
            <span>Active Deliveries</span>
            <h2>--</h2>
            <small>Currently in progress</small>
          </div>

          <div className="captain-stat-card">
            <span>Today's Earnings</span>
            <h2>₹ --</h2>
            <small>Total earnings today</small>
          </div>

        </section>

        <section className="captain-content">

          <div className="captain-panel">
            <div className="captain-panel-heading">
              <h3>Quick Actions</h3>
              <span>Manage deliveries</span>
            </div>

            <div className="captain-actions">
              <button>◈ View Requests</button>
              <button>➤ Active Deliveries</button>
              <button>▤ Delivery History</button>
              <button>₹ View Earnings</button>
            </div>
          </div>

          <div className="captain-panel">
            <div className="captain-panel-heading">
              <h3>Captain Information</h3>
              <span>Account details</span>
            </div>

            <div className="captain-info">
              <p>Captain Name <strong>Not Configured</strong></p>
              <p>Captain ID <strong>Not Assigned</strong></p>
              <p>Availability <strong className="captain-available">Available</strong></p>
              <p>Platform <strong>ORGNC</strong></p>
            </div>
          </div>

        </section>

        <footer className="captain-footer">
          ORGNC Captain © 2026 | Delivery Partner Portal
        </footer>

      </main>
    </div>
  );
}