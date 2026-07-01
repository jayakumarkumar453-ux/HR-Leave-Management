import { useEffect, useState } from "react";

import API from "../services/api";

function LeaveHistory() {

    const [leaves, setLeaves] = useState([]);

    useEffect(() => {

        API.get("/leaves")

            .then((res) => {

                setLeaves(res.data);

            });

    }, []);

    return (

        <div style={{ padding: "20px" }}>

            <h2>Leave History</h2>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Type</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        leaves.map((leave) => (

                            <tr key={leave.id}>

                                <td>{leave.employeeName}</td>

                                <td>{leave.leaveType}</td>

                                <td>{leave.status}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default LeaveHistory;
