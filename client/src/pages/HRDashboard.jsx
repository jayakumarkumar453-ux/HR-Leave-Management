import { useEffect, useState } from "react";
import API from "../services/api";

function HRDashboard() {

    const [leaves, setLeaves] = useState([]);

    const loadLeaves = () => {
        API.get("/leaves").then((res) => {
            setLeaves(res.data);
        });
    };

    useEffect(() => {
        loadLeaves();
    }, []);

    const approve = async (id) => {
        await API.put(`/leaves/approve/${id}`);
        alert("Leave Approved");
        loadLeaves();
    };

    const reject = async (id) => {
        await API.put(`/leaves/reject/${id}`);
        alert("Leave Rejected");
        loadLeaves();
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>HR Dashboard</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Leave Type</th>
                        <th>Status</th>
                        <th>Approve</th>
                        <th>Reject</th>
                    </tr>
                </thead>

                <tbody>

                    {leaves.map((leave) => (

                        <tr key={leave.id}>

                            <td>{leave.employeeName}</td>

                            <td>{leave.leaveType}</td>

                            <td>{leave.status}</td>

                            <td>

                                <button
                                    onClick={() => approve(leave.id)}
                                >
                                    Approve
                                </button>

                            </td>

                            <td>

                                <button
                                    onClick={() => reject(leave.id)}
                                >
                                    Reject
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default HRDashboard;
