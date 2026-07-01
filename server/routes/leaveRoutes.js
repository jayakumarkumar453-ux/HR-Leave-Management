const express = require("express");
const router = express.Router();

const {
    getLeaves,
    applyLeave,
    approveLeave,
    rejectLeave
} = require("../controllers/leaveController");

router.get("/", getLeaves);
router.post("/apply", applyLeave);
router.put("/approve/:id", approveLeave);
router.put("/reject/:id", rejectLeave);

module.exports = router;
