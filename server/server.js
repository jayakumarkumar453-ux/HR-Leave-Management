const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const leaveRoutes = require("./routes/leaveRoutes");

app.use("/api/leaves", leaveRoutes);

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});
