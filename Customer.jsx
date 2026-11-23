import "./Customer.css";

const categories = [
  { icon: "🥬", name: "Groceries" },
  { icon: "🥛", name: "Dairy" },
  { icon: "🍎", name: "Fruits" },
  { icon: "🥦", name: "Vegetables" },
  { icon: "🥤", name: "Beverages" },
  { icon: "🍪", name: "Snacks" },
];

const products = [
  { name: "Fresh Apples", category: "Fruits", price: 120, unit: "1 kg", icon: "🍎" },
  { name: "Fresh Milk", category: "Dairy", price: 65, unit: "1 litre", icon: "🥛" },
  { name: "Organic Carrots", category: "Vegetables", price: 45, unit: "500 g", icon: "🥕" },
  { name: "Brown Bread", category: "Bakery", price: 40, unit: "1 pack", icon: "🍞" },
];

export default function Customer() {
  return (
    <div className="customer-page">

      <header className="customer-header">
        <div className="customer-logo">
          <h2>ORGNC<span>.</span></h2>
          <small>SHOP SMART. LIVE BETTER.</small>
        </div>

        <div className="customer-location">
          <span>📍</span>
          <div>
            <small>DELIVERING TO</small>
            <strong>Select your location</strong>
          </div>
        </div>

        <div className="customer-search">
          <span>⌕</span>
          <input type="text" placeholder="Search for products, stores..." />
        </div>

        <div className="customer-header-actions">
          <button>♡</button>
          <button>🛒 <span className="cart-count">0</span></button>
          <button className="customer-login">Login / Sign Up</button>
        </div>
      </header>

      <nav className="customer-nav">
        <a className="customer-nav-active">Home</a>
        <a>Categories</a>
        <a>Nearby Stores</a>
        <a>My Orders</a>
        <a>Offers</a>
      </nav>

      <main className="customer-main">

        <section className="customer-hero">
          <div className="customer-hero-content">
            <span>WELCOME TO ORGNC</span>
            <h1>Everything You Need,<br />Delivered to Your Door.</h1>
            <p>
              Discover local stores, explore fresh products
              and enjoy a convenient shopping experience.
            </p>
            <button>Start Shopping →</button>
          </div>

          <div className="customer-hero-visual">
            <div className="customer-hero-circle">🛍️</div>
            <div className="customer-hero-tag">YOUR LOCAL MARKETPLACE</div>
          </div>
        </section>

        <section className="customer-section">
          <div className="customer-section-heading">
            <div>
              <span>EXPLORE</span>
              <h2>Shop by Category</h2>
            </div>
            <a>View All →</a>
          </div>

          <div className="customer-categories">
            {categories.map((category) => (
              <div className="customer-category" key={category.name}>
                <div>{category.icon}</div>
                <strong>{category.name}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="customer-section">
          <div className="customer-section-heading">
            <div>
              <span>HANDPICKED FOR YOU</span>
              <h2>Popular Products</h2>
            </div>
            <a>View All →</a>
          </div>

          <div className="customer-products">
            {products.map((product) => (
              <div className="customer-product-card" key={product.name}>
                <div className="customer-product-image">
                  <span>♡</span>
                  <div>{product.icon}</div>
                </div>

                <div className="customer-product-details">
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>
                  <p>{product.unit}</p>

                  <div className="customer-product-bottom">
                    <strong>₹{product.price}</strong>
                    <button>+ Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="customer-store-banner">
          <div>
            <span>LOCAL SHOPPING, MADE SIMPLE</span>
            <h2>Discover Stores Around You</h2>
            <p>Support local businesses and shop from stores near you.</p>
          </div>
          <button>Explore Stores →</button>
        </section>

        <section className="customer-features">
          <div>
            <span>🚚</span>
            <h3>Fast Delivery</h3>
            <p>Convenient delivery to your doorstep.</p>
          </div>

          <div>
            <span>🏪</span>
            <h3>Local Stores</h3>
            <p>Discover and support nearby businesses.</p>
          </div>

          <div>
            <span>🔒</span>
            <h3>Secure Payments</h3>
            <p>Shop with confidence and security.</p>
          </div>

          <div>
            <span>⭐</span>
            <h3>Quality Products</h3>
            <p>Find products for your everyday needs.</p>
          </div>
        </section>

      </main>

      <footer className="customer-footer">
        <h2>ORGNC<span>.</span></h2>
        <p>Your neighbourhood marketplace.</p>
        <small>© 2026 ORGNC. All rights reserved.</small>
      </footer>

    </div>
  );
}