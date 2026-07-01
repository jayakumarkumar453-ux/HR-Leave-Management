const db = require("../config/db");

// Get all leaves
exports.getLeaves = (req, res) => {
    db.query("SELECT * FROM leaves", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// Apply leave
exports.applyLeave = (req, res) => {

    const {
        employeeName,
        employeeId,
        leaveType,
        fromDate,
        toDate,
        reason
    } = req.body;

    const sql = `
    INSERT INTO leaves
    (employeeName,employeeId,leaveType,fromDate,toDate,reason,status)
    VALUES(?,?,?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            employeeName,
            employeeId,
            leaveType,
            fromDate,
            toDate,
            reason,
            "Pending"
        ],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: "Leave Applied Successfully"
            });
        }
    );
};



// Approve Leave
exports.approveLeave = (req, res) => {

    const id = req.params.id;

    db.query(
        "UPDATE leaves SET status='Approved' WHERE id=?",
        [id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: "Leave Approved Successfully"
            });
        }
    );
};

// Reject Leave
exports.rejectLeave = (req, res) => {

    const id = req.params.id;

    db.query(
        "UPDATE leaves SET status='Rejected' WHERE id=?",
        [id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: "Leave Rejected Successfully"
            });
        }
    );
};
