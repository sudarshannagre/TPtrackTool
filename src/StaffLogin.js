import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { STAFF_LOGIN } from "./Apis";
import img from "./images/img.png";


function StaffLogin(){
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function auth() {
        
        const body = {
            "emailORMobile": userName,
            "password": password
        }
        const header = {
            "Content-Type": "application/json"
        }

        axios.post(STAFF_LOGIN, body, { headers: header }).then(response => {
            if(response.data !== ''){
                localStorage.setItem("userName", response.data.name);
                localStorage.setItem("role", response.data.role);
                navigate("/staffHome");
            }else{
                alert("Something went wrong, please try with correct credentials !!");
            }

        }).catch(error => {
            alert("Something went wrong, please try with correct credentials !!");
        });
    }

    return(
        <div style={{
            backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover",
            height: "100vh"
        }}>
            <div className='container'>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="text" autoComplete="Username"
                        className="form-control" onChange={e => (setUserName(e.target.value))}
                        placeholder="Enter username" required
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password" autoComplete="new-password"
                        className="form-control" onChange={e => (setPassword(e.target.value))}
                        placeholder="Enter password" required
                    />
                </div>

                <div className="d-grid">
                    <input className="btn btn-primary" type="button" value={'Login'} onClick={auth} />
                </div>
                <p>For Student Login? <a href="/studentLogin">Click Here</a></p>
            </div>
        </div>
    );
}

export default StaffLogin;