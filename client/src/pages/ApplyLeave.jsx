import { useState } from "react";
import API from "../services/api";

function ApplyLeave() {

    const [form, setForm] = useState({

        employeeName: "",

        employeeId: "",

        leaveType: "",

        fromDate: "",

        toDate: "",

        reason: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const submit = async () => {

        await API.post("/leaves/apply", form);

        alert("Leave Applied Successfully");

    };

    return (

        <div style={{ padding: "20px" }}>

            <h2>Apply Leave</h2>

            <input
                name="employeeName"
                placeholder="Employee Name"
                onChange={handleChange}
            /><br /><br />

            <input
                name="employeeId"
                placeholder="Employee ID"
                onChange={handleChange}
            /><br /><br />

            <input
                name="leaveType"
                placeholder="Leave Type"
                onChange={handleChange}
            /><br /><br />

            <input
                type="date"
                name="fromDate"
                onChange={handleChange}
            /><br /><br />

            <input
                type="date"
                name="toDate"
                onChange={handleChange}
            /><br /><br />

            <textarea
                name="reason"
                placeholder="Reason"
                onChange={handleChange}
            ></textarea>

            <br /><br />

            <button onClick={submit}>
                Apply Leave
            </button>

        </div>

    );

}

export default ApplyLeave;
