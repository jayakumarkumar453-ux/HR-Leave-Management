import React from "react";

function Home() {
  const cardStyle = {
    background: "#ffffff",
    borderRadius: "15px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #141e30, #243b55)",
        padding: "40px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "50px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <h1
          style={{
            color: "#0d6efd",
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          👨‍💼 HR Employee Leave Management System
        </h1>

        <h3
          style={{
            color: "#555",
            marginBottom: "20px",
          }}
        >
          Welcome to the Employee Portal
        </h3>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            lineHeight: "30px",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Manage employee leave applications efficiently using our modern HR
          Management System. Apply for leave, view leave history, track approval
          status, and enable HR to manage employee requests easily.
        </p>
      </div>

      {/* Feature Cards */}
      <h2
        style={{
          color: "#ffffff",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        Our Features
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h1 style={{ fontSize: "50px" }}>📝</h1>
          <h3 style={{ color: "#0d6efd" }}>Apply Leave</h3>
          <p style={{ color: "#555" }}>
            Submit your leave request quickly through the online portal.
          </p>
        </div>

        <div style={cardStyle}>
          <h1 style={{ fontSize: "50px" }}>📅</h1>
          <h3 style={{ color: "#198754" }}>Leave History</h3>
          <p style={{ color: "#555" }}>
            View your complete leave records with current status.
          </p>
        </div>

        <div style={cardStyle}>
          <h1 style={{ fontSize: "50px" }}>✔️</h1>
          <h3 style={{ color: "#fd7e14" }}>Approval Tracking</h3>
          <p style={{ color: "#555" }}>
            Check whether your leave request is pending, approved or rejected.
          </p>
        </div>

        <div style={cardStyle}>
          <h1 style={{ fontSize: "50px" }}>📊</h1>
          <h3 style={{ color: "#dc3545" }}>HR Dashboard</h3>
          <p style={{ color: "#555" }}>
            HR can review, approve and reject employee leave requests.
          </p>
        </div>
      </div>


      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          color: "#ddd",
          marginTop: "60px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "20px",
        }}
      >
        © 2026 HR Employee Leave Management System <br />
        Built with React.js • Node.js • Express.js • MySQL
      </div>
    </div>
  );
}

export default Home;
