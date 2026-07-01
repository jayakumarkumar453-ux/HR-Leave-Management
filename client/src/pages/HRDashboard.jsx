import { useEffect, useState } from "react";
import API from "../services/api";

function HRDashboard() {
  const [leaves, setLeaves] = useState([]);

  const loadLeaves = () => {
    API.get("/leaves")
      .then((res) => {
        setLeaves(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadLeaves();
  }, []);

  const approve = async (id) => {
    await API.put(`/leaves/approve/${id}`);
    alert("✅ Leave Approved Successfully");
    loadLeaves();
  };

  const reject = async (id) => {
    await API.put(`/leaves/reject/${id}`);
    alert("❌ Leave Rejected");
    loadLeaves();
  };

  const statusStyle = (status) => {
    if (status === "Approved") {
      return {
        background: "#198754",
        color: "#fff",
        padding: "6px 12px",
        borderRadius: "20px",
      };
    }

    if (status === "Rejected") {
      return {
        background: "#dc3545",
        color: "#fff",
        padding: "6px 12px",
        borderRadius: "20px",
      };
    }

    return {
      background: "#ffc107",
      color: "#000",
      padding: "6px 12px",
      borderRadius: "20px",
    };
  };

  const approved = leaves.filter(
    (l) => l.status === "Approved"
  ).length;

  const rejected = leaves.filter(
    (l) => l.status === "Rejected"
  ).length;

  const pending = leaves.filter(
    (l) => l.status === "Pending"
  ).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
        padding: "40px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        👨‍💼 HR Dashboard
      </h1>

      {/* Summary Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            flex: "1",
            minWidth: "180px",
            background: "#0d6efd",
            color: "#fff",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(0,0,0,.3)",
          }}
        >
          <h2>{leaves.length}</h2>
          <p>Total Requests</p>
        </div>

        <div
          style={{
            flex: "1",
            minWidth: "180px",
            background: "#198754",
            color: "#fff",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(0,0,0,.3)",
          }}
        >
          <h2>{approved}</h2>
          <p>Approved</p>
        </div>

        <div
          style={{
            flex: "1",
            minWidth: "180px",
            background: "#ffc107",
            color: "#000",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(0,0,0,.3)",
          }}
        >
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>

        <div
          style={{
            flex: "1",
            minWidth: "180px",
            background: "#dc3545",
            color: "#fff",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(0,0,0,.3)",
          }}
        >
          <h2>{rejected}</h2>
          <p>Rejected</p>
        </div>
      </div>

      {/* Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 15px 35px rgba(0,0,0,.3)",
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#0d6efd",
                color: "#fff",
              }}
            >
              <th style={{ padding: "15px" }}>👤 Employee</th>
              <th>🆔 ID</th>
              <th>📝 Leave Type</th>
              <th>📅 From</th>
              <th>📅 To</th>
              <th>📌 Status</th>
              <th>✔ Approve</th>
              <th>✖ Reject</th>
            </tr>
          </thead>

          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "15px" }}>
                  {leave.employeeName}
                </td>

                <td>{leave.employeeId}</td>

                <td>{leave.leaveType}</td>

                <td>{leave.fromDate}</td>

                <td>{leave.toDate}</td>

                <td>
                  <span style={statusStyle(leave.status)}>
                    {leave.status}
                  </span>
                </td>

                <td>
                  <button
                    onClick={() => approve(leave.id)}
                    disabled={leave.status === "Approved"}
                    style={{
                      background: "#198754",
                      color: "#fff",
                      border: "none",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      cursor:
                        leave.status === "Approved"
                          ? "not-allowed"
                          : "pointer",
                    }}
                  >
                    ✔ Approve
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => reject(leave.id)}
                    disabled={leave.status === "Rejected"}
                    style={{
                      background: "#dc3545",
                      color: "#fff",
                      border: "none",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      cursor:
                        leave.status === "Rejected"
                          ? "not-allowed"
                          : "pointer",
                    }}
                  >
                    ✖ Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#666",
            fontWeight: "bold",
          }}
        >
          Total Leave Applications: {leaves.length}
        </div>
      </div>
    </div>
  );
}

export default HRDashboard;
