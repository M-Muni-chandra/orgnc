import "./Inventory.css";

export default function Inventory() {
  return (
    <div className="inventory-page">
      <aside className="inventory-sidebar">
        <div className="inventory-brand">
          <h2>ORGNC</h2>
          <span>INVENTORY</span>
        </div>

        <nav>
          <p className="inventory-nav-title">STORE MANAGEMENT</p>
          <a className="active">Overview</a>
          <a>Products</a>
          <a>Categories</a>
          <a>Stock Management</a>
          <a>Pricing</a>

          <p className="inventory-nav-title">OPERATIONS</p>
          <a>Orders</a>
          <a>Sales History</a>
          <a>Reports</a>

          <p className="inventory-nav-title">ACCOUNT</p>
          <a>Store Settings</a>
          <a>Logout</a>
        </nav>

        <div className="inventory-profile">
          <div className="inventory-avatar">SA</div>
          <div>
            <strong>Store Admin</strong>
            <small>Store Manager</small>
          </div>
        </div>
      </aside>

      <main className="inventory-main">
        <header className="inventory-header">
          <div>
            <p>ORGNC / INVENTORY</p>
            <h1>Store Overview</h1>
          </div>

          <div className="inventory-store-status">
            <span></span> Store Active
          </div>
        </header>

        <section className="inventory-welcome">
          <div>
            <p>STORE MANAGEMENT PORTAL</p>
            <h2>Welcome to ORGNC Inventory</h2>
            <p>
              Manage your products, monitor stock and keep your store
              operations running smoothly.
            </p>
          </div>
          <div className="inventory-welcome-icon">▦</div>
        </section>

        <section className="inventory-stats">
          <div className="inventory-stat-card">
            <span>Total Products</span>
            <h2>--</h2>
            <small>Products in your store</small>
          </div>

          <div className="inventory-stat-card">
            <span>Total Categories</span>
            <h2>--</h2>
            <small>Product categories</small>
          </div>

          <div className="inventory-stat-card">
            <span>Pending Orders</span>
            <h2>--</h2>
            <small>Orders awaiting processing</small>
          </div>

          <div className="inventory-stat-card">
            <span>Low Stock Items</span>
            <h2>--</h2>
            <small>Items requiring attention</small>
          </div>
        </section>

        <section className="inventory-content">
          <div className="inventory-panel">
            <div className="inventory-panel-heading">
              <h3>Quick Actions</h3>
              <span>Manage your store</span>
            </div>

            <div className="inventory-actions">
              <button>＋ Add Product</button>
              <button>▤ Manage Products</button>
              <button>◈ Update Stock</button>
              <button>▧ View Orders</button>
            </div>
          </div>

          <div className="inventory-panel">
            <div className="inventory-panel-heading">
              <h3>Store Information</h3>
              <span>Store details</span>
            </div>

            <div className="inventory-info">
              <p>Store Name <strong>Not Configured</strong></p>
              <p>Store ID <strong>Not Assigned</strong></p>
              <p>Store Status <strong className="inventory-active">Active</strong></p>
              <p>Platform <strong>ORGNC</strong></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}