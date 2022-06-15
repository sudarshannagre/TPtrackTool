import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    var userName;

    if(role !== null){
        userName = localStorage.getItem("userName");
    }else{
        userName = localStorage.getItem("userName").split(":")[1];
    }
    
    function logout(){
        localStorage.removeItem("userName");
        localStorage.removeItem("role");
        navigate("/");
    }

    return(
        <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
            {(role === 'Admin' || role === 'HR') && 
                <a href="/staffHome" className="nav-link" style={{ display: 'inline-block' }} >Home</a>
            }
            { role === null &&
                <a href="/studentHome" className="nav-link" style={{ display: 'inline-block' }} >Home</a>
            }
            |<a href="/staffDetails" className="nav-link" style={{ display: 'inline-block' }} >Staff </a>|
            <a href="/trainerDetails" className="nav-link" style={{ display: 'inline-block' }} >Trainer </a> |
            {(role === 'Admin' || role === 'HR') && <>
                <a href="/studentSignup" className="nav-link" style={{ display: 'inline-block' }} >Student</a> | 
                <a href="/communication" className="nav-link" style={{ display: 'inline-block' }} >Communication</a>
                </>
            }

        </div>
        <form className="form-inline">
            Welcome, {userName} | <a href="#" className="nav-link" style={{ display: 'inline-block' }} onClick={logout}>LogOut </a>
        </form>
    </nav>
    );
}

export default Navbar;