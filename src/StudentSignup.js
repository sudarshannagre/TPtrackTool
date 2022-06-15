import axios from "axios";
import React, { useEffect, useState } from "react";
import { GETALL_BATCH_API, GETALL_TECH_API, STUDENT_API } from "./Apis";
import Navbar from "./Navbar";

function StudentSignup(){
    const [technology, setTechnology] = useState([]);
    const [batch, setBatch] = useState([]);

    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [technologyName, setTechnologyName] = useState();
    const [batchName, setBatchName] = useState();

    function signUp(){
        alert(name + mobile + email+address+technologyName+batchName);
        const body={
            "name": name,
            "mobile": mobile,
            "email": email,
            "address": address,
            "technology": technologyName,
            "bacthName": batchName
        }
        const header={
            "Content-Type": "application/json"
        }

        axios.post(STUDENT_API, body, header).then(res =>{
            alert(res.data);
        }).catch(error =>{
            alert("Registration Failed , try again !!");
        })
    }

    useEffect(()=>{
        
        fetch(GETALL_TECH_API).then(res => res.json())
        .then(json => setTechnology(json));

        fetch(GETALL_BATCH_API).then(res => res.json())
        .then(json => setBatch(json));

    },[]);

return(
    <>
    <Navbar/>
        <div className='containerInner'>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>Full Name</label>
                    <input
                        type="text" autoComplete="FullName"
                        className="form-control"
                        placeholder="Enter FullName" required onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Mobile</label>
                    <input
                        type="text" autoComplete="mobile"
                        className="form-control"
                        placeholder="Enter Mobile number" required onChange={e=>setMobile(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="text" autoComplete="email"
                        className="form-control"
                        placeholder="Enter Email" required onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Address</label>
                    <input
                        type="text" autoComplete="address"
                        className="form-control"
                        placeholder="Enter Address" required onChange={e=>setAddress(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Technology</label>
                    <select className="form-control" onChange={e=>setTechnologyName(e.target.value)}>
                        <option>----- Select -----</option>
                        {technology.map((tech,index) => (
                            <option key={index} value={tech.tech_name} > {tech.tech_name}  </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label>Batch</label>
                    <select className="form-control" onChange={e=>setBatchName(e.target.value)}>
                        <option>----- Select -----</option>
                        {batch.map((b,index) => (
                            <option key={index} value={b.batchName} > {b.batchName} : [ {b.technolgy} ] : [ {b.timing} ]  </option>
                        ))}
                    </select>
                </div>

                <div className="d-grid">
                    <input className="btn btn-primary" type="button" value={'Sign-Up'} onClick={signUp}/>
                </div>
            </div>
    
    </>
);

}

export default StudentSignup;