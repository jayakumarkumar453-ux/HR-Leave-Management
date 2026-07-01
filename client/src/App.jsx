import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ApplyLeave from "./pages/ApplyLeave";
import LeaveHistory from "./pages/LeaveHistory";
import HRDashboard from "./pages/HRDashboard";

function App() {

    return (

        <BrowserRouter>

            <Navbar/>

            <Routes>

                <Route path="/" element={<Home/>} />

                <Route path="/apply" element={<ApplyLeave/>} />

                <Route path="/history" element={<LeaveHistory/>} />

                <Route path="/dashboard" element={<HRDashboard/>} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;
