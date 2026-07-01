import { useState } from "react";
import API from "../services/api";

function ApplyLeave() {
  const [form, setForm] = useState({
    employeeName: "",
    employeeId: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async () => {
    try {
      await API.post("/leaves/apply", form);

      alert("✅ Leave Applied Successfully!");

      setForm({
        employeeName: "",
        employeeId: "",
        leaveType: "",
        fromDate: "",
        toDate: "",
        reason: "",
      });
    } catch (error) {
      alert("❌ Failed to Apply Leave");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontSize: "15px",
    marginTop: "5px",
    marginBottom: "15px",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#1e3c72,#2a5298)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "700px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#0d6efd",
            marginBottom: "50px",
          }}
        >
          📝 Apply Leave
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Fill in the details below to submit your leave request.
        </p>

        {/* Row 1 */}
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            <label>👤 Employee Name</label>
            <input
              style={inputStyle}
              type="text"
              name="employeeName"
              value={form.employeeName}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </div>

          <div style={{ flex: 1 }}>
            <label>🆔 Employee ID</label>
            <input
              style={inputStyle}
              type="text"
              name="employeeId"
              value={form.employeeId}
              onChange={handleChange}
              placeholder="Enter Employee ID"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            <label>📋 Leave Type</label>

            <select
              style={inputStyle}
              name="leaveType"
              value={form.leaveType}
              onChange={handleChange}
            >
              <option value="">Choose Leave Type</option>
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Earned Leave</option>
              <option>Emergency Leave</option>
              <option>Maternity Leave</option>
              <option>Paternity Leave</option>
              <option>Loss of Pay</option>
            </select>
          </div>

          <div style={{ flex: 1 }}>
            <label>📌 Reason</label>

            <input
              style={inputStyle}
              type="text"
              name="reason"
              value={form.reason}
              onChange={handleChange}
              placeholder="Short Reason"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            <label>📅 From Date</label>

            <input
              style={inputStyle}
              type="date"
              name="fromDate"
              value={form.fromDate}
              onChange={handleChange}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label>📅 To Date</label>

            <input
              style={inputStyle}
              type="date"
              name="toDate"
              value={form.toDate}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Description */}
        <label>📝 Detailed Reason</label>

        <textarea
          style={{
            ...inputStyle,
            height: "120px",
            resize: "none",
          }}
          name="reason"
          value={form.reason}
          onChange={handleChange}
          placeholder="Write your leave reason..."
        />

        <button
          onClick={submit}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "15px",
            background: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🚀 Submit Leave Request
        </button>
      </div>
    </div>
  );
}

export default ApplyLeave;
