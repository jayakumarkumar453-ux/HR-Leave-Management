import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    fontWeight: "600",
    transition: "0.3s",
    fontSize: "16px",
  };

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      {/* Logo */}
      <div
        style={{
          color: "#fff",
          fontSize: "24px",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        👨‍💼 HR Leave Portal
      </div>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Link
          to="/"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.background = "#0d6efd")}
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          🏠 Home
        </Link>

        <Link
          to="/apply"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.background = "#198754")}
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          📝 Apply Leave
        </Link>

        <Link
          to="/history"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.background = "#fd7e14")}
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          📅 Leave History
        </Link>

        <Link
          to="/dashboard"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.background = "#dc3545")}
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          📊 HR Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
