import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav style={{
            background: "#1976d2",
            padding: "15px"
        }}>

            <Link to="/" style={{color:"white",marginRight:"20px"}}>
                Home
            </Link>

            <Link to="/apply" style={{color:"white",marginRight:"20px"}}>
                Apply Leave
            </Link>

            <Link to="/history" style={{color:"white",marginRight:"20px"}}>
                Leave History
            </Link>

            <Link to="/dashboard" style={{color:"white"}}>
                HR Dashboard
            </Link>

        </nav>

    );

}

export default Navbar;
