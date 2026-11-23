import {
  ArrowUpRight,
  Boxes,
  ShoppingBag,
  Bike,
  LayoutDashboard,
  Activity,
  ShieldCheck
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import "./Home.css";

const applications = [
  {
    name: "Inventory",
    route: "/inventory",
    subtitle: "Store Management",
    description:
      "Manage products, monitor stock levels, update pricing and control store operations.",
    icon: Boxes,
    color: "blue",
    number: "01",
    status: "STORE OPERATIONS"
  },
  {
    name: "Customer",
    route: "/customer",
    subtitle: "Shopping Experience",
    description:
      "Discover products, explore categories, place orders and track deliveries.",
    icon: ShoppingBag,
    color: "purple",
    number: "02",
    status: "CUSTOMER EXPERIENCE"
  },
  {
    name: "Captain",
    route: "/captain",
    subtitle: "Delivery Operations",
    description:
      "Accept delivery requests, manage pickups, navigate routes and complete deliveries.",
    icon: Bike,
    color: "green",
    number: "03",
    status: "DELIVERY NETWORK"
  },
  {
    name: "Control",
    route: "/admin",
    subtitle: "Master Administration",
    description:
      "Monitor stores, customers, inventory, orders, delivery partners and business performance.",
    icon: LayoutDashboard,
    color: "orange",
    number: "04",
    status: "MASTER CONTROL"
  }
];

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">

      <nav className="navbar">
        <div className="brand">
          <div className="brand-symbol">O</div>
          <span>
            ORGNC<span className="brand-dot">.</span>
          </span>
        </div>

        <div className="nav-right">
          <span className="prototype-badge">
            <span className="live-dot"></span>
            PROTOTYPE ENVIRONMENT
          </span>

          <button className="about-button">
            About Platform
          </button>
        </div>
      </nav>

      <section className="hero">

        <div className="hero-content">

          <div className="eyebrow">
            <Activity size={15} />
            UNIFIED COMMERCE ECOSYSTEM
          </div>

          <h1>
            Everything
            <br />
            connected<span>.</span>
          </h1>

          <p>
            One intelligent ecosystem connecting stores,
            customers, delivery partners and business
            operations through a single platform.
          </p>

          <div className="hero-info">
            <ShieldCheck size={17} />
            FOUR APPLICATIONS. ONE CONNECTED SYSTEM.
          </div>

        </div>

        <div className="hero-decoration">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit-center">O</div>
        </div>

      </section>

      <section className="applications">

        <div className="section-heading">
          <div>
            <span className="section-label">
              THE ECOSYSTEM
            </span>
            <h2>Explore applications</h2>
          </div>

          <span className="application-count">
            04 APPLICATIONS
          </span>
        </div>

        <div className="application-grid">

          {applications.map((app) => {
            const Icon = app.icon;

            return (
              <div
                className={`app-card ${app.color}`}
                key={app.name}
              >

                <div className="card-top">

                  <span className="card-number">
                    {app.number}
                  </span>

                  <div className="app-icon">
                    <Icon size={23} />
                  </div>

                  <span className="card-status">
                    {app.status}
                  </span>

                </div>

                <div className="card-content">

                  <span className="app-subtitle">
                    {app.subtitle}
                  </span>

                  <h3>ORGNC {app.name}</h3>

                  <p>{app.description}</p>

                </div>

                <button
                  className="launch-button"
                  onClick={() => navigate(app.route)}
                >
                  Launch application
                  <ArrowUpRight size={18} />
                </button>

              </div>
            );
          })}

        </div>

      </section>

      <footer>
        <div className="footer-brand">
          ORGNC<span>.</span>
        </div>

        <p>
          Everything Connected. © 2026 ORGNC Platform.
        </p>

        <span>
          UNIFIED COMMERCE TECHNOLOGY
        </span>
      </footer>

    </main>
  );
}

export default Home;