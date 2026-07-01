import { useEffect, useState } from "react";
import API from "../services/api";

function LeaveHistory() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    API.get("/leaves")
      .then((res) => {
        setLeaves(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return {
          background: "#28a745",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "20px",
        };

      case "Rejected":
        return {
          background: "#dc3545",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "20px",
        };

      default:
        return {
          background: "#ffc107",
          color: "#000",
          padding: "6px 12px",
          borderRadius: "20px",
        };
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "95%",
          maxWidth: "1000px",
          background: "#fff",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0d6efd",
            marginBottom: "30px",
          }}
        >
          📅 Employee Leave History
        </h2>

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
              <th style={{ padding: "15px" }}>🆔 ID</th>
              <th style={{ padding: "15px" }}>📝 Leave Type</th>
              <th style={{ padding: "15px" }}>📅 From</th>
              <th style={{ padding: "15px" }}>📅 To</th>
              <th style={{ padding: "15px" }}>📌 Status</th>
            </tr>
          </thead>

          <tbody>
            {leaves.length > 0 ? (
              leaves.map((leave) => (
                <tr
                  key={leave.id}
                  style={{
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "15px" }}>
                    {leave.employeeName}
                  </td>

                  <td>{leave.employeeId}</td>

                  <td>{leave.leaveType}</td>

                  <td>{leave.fromDate}</td>

                  <td>{leave.toDate}</td>

                  <td>
                    <span style={getStatusStyle(leave.status)}>
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  style={{
                    padding: "30px",
                    color: "#777",
                    fontSize: "18px",
                  }}
                >
                  📂 No Leave Records Found
                </td>
              </tr>
            )}
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

export default LeaveHistory;
