import {
  LayoutDashboard,
  Store,
  Package,
  ShoppingCart,
  Bike,
  Users,
  ChartNoAxesCombined,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  TrendingUp,
  Clock,
  CheckCircle,
  Menu
} from "lucide-react";

import "./Admin.css";

const stats = [
  { title: "Total Stores", value: "128", change: "+12.5%", icon: Store },
  { title: "Total Orders", value: "2,840", change: "+18.2%", icon: ShoppingCart },
  { title: "Total Revenue", value: "₹4,85,200", change: "+14.8%", icon: TrendingUp },
  { title: "Active Captains", value: "76", change: "+8.4%", icon: Bike }
];

const orders = [
  { id: "#ORD-1042", customer: "Rahul Sharma", store: "Fresh Mart", amount: "₹850", status: "Delivered" },
  { id: "#ORD-1043", customer: "Priya Reddy", store: "Daily Needs", amount: "₹420", status: "On the way" },
  { id: "#ORD-1044", customer: "Arjun Kumar", store: "Smart Store", amount: "₹1,250", status: "Preparing" },
  { id: "#ORD-1045", customer: "Sneha Rao", store: "Fresh Mart", amount: "₹650", status: "Pending" }
];

function Admin() {
  return (
    <div className="admin-layout">

      <aside className="admin-sidebar">

        <div className="admin-brand">
          <div className="admin-logo">O</div>
          <span>ORGNC<span>.</span></span>
        </div>

        <p className="sidebar-label">MAIN MENU</p>

        <nav className="sidebar-nav">
          <a className="active"><LayoutDashboard /> Dashboard</a>
          <a><Store /> Stores</a>
          <a><Package /> Inventory</a>
          <a><ShoppingCart /> Orders</a>
          <a><Bike /> Delivery Partners</a>
          <a><Users /> Customers</a>
          <a><ChartNoAxesCombined /> Analytics</a>
        </nav>

        <div className="sidebar-bottom">
          <a><Settings /> Settings</a>

          <div className="admin-profile">
            <div className="profile-avatar">AD</div>
            <div>
              <strong>Administrator</strong>
              <small>Super Admin</small>
            </div>
          </div>
        </div>

      </aside>

      <main className="admin-main">

        <header className="admin-header">

          <div>
            <button className="mobile-menu"><Menu /></button>
            <span className="header-label">MASTER CONTROL CENTER</span>
            <h2>Overview Dashboard</h2>
          </div>

          <div className="header-actions">
            <div className="search-box">
              <Search size={17} />
              <input placeholder="Search anything..." />
            </div>

            <button className="notification-button">
              <Bell size={19} />
              <span></span>
            </button>

            <div className="header-avatar">AD</div>
          </div>

        </header>

        <section className="welcome-section">
          <div>
            <h1>Welcome back, Administrator 👋</h1>
            <p>Here's what's happening across your ORGNC ecosystem today.</p>
          </div>

          <div className="system-status">
            <span></span>
            ALL SYSTEMS OPERATIONAL
          </div>
        </section>

        <section className="stats-grid">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div className="stat-card" key={item.title}>
                <div className="stat-top">
                  <span>{item.title}</span>
                  <div><Icon size={20} /></div>
                </div>

                <h2>{item.value}</h2>

                <p>
                  <TrendingUp size={14} />
                  {item.change} <span>vs last month</span>
                </p>
              </div>
            );
          })}

        </section>

        <section className="admin-content-grid">

          <div className="dashboard-panel revenue-panel">

            <div className="panel-heading">
              <div>
                <h3>Business Performance</h3>
                <p>Revenue overview across the ecosystem</p>
              </div>

              <button>This month ↓</button>
            </div>

            <div className="revenue-value">
              ₹4,85,200
              <span> +14.8%</span>
            </div>

            <div className="chart-placeholder">
              <div className="chart-bars">
                {[35, 55, 42, 75, 58, 88, 65, 95, 70, 82, 60, 100].map((height, i) => (
                  <div key={i} className="chart-column">
                    <div style={{ height: `${height}%` }}></div>
                  </div>
                ))}
              </div>

              <div className="chart-labels">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(month => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>

          </div>

          <div className="dashboard-panel activity-panel">

            <div className="panel-heading">
              <div>
                <h3>Live Operations</h3>
                <p>Current platform activity</p>
              </div>
              <span className="live-indicator">LIVE</span>
            </div>

            <div className="activity-item">
              <div className="activity-icon"><Store /></div>
              <div>
                <strong>128 Stores</strong>
                <small>Stores registered</small>
              </div>
              <CheckCircle className="activity-check" />
            </div>

            <div className="activity-item">
              <div className="activity-icon"><Bike /></div>
              <div>
                <strong>76 Captains</strong>
                <small>Currently available</small>
              </div>
              <CheckCircle className="activity-check" />
            </div>

            <div className="activity-item">
              <div className="activity-icon"><ShoppingCart /></div>
              <div>
                <strong>42 Active Orders</strong>
                <small>Across all stores</small>
              </div>
              <Clock className="activity-clock" />
            </div>

          </div>

        </section>

        <section className="dashboard-panel orders-panel">

          <div className="panel-heading">
            <div>
              <h3>Recent Orders</h3>
              <p>Monitor customer orders across all stores</p>
            </div>

            <button>View all orders <ArrowUpRight size={15} /></button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ORDER ID</th>
                  <th>CUSTOMER</th>
                  <th>STORE</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                </tr>
              </thead>

              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.store}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`order-status ${order.status.toLowerCase().replaceAll(" ", "-")}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </section>

        <footer className="admin-footer">
          <span>ORGNC CONTROL CENTER</span>
          <span>Everything Connected. © 2026</span>
        </footer>

      </main>
    </div>
  );
}

export default Admin;