import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { STUDENT_SEARCH } from "./Apis";
import Navbar from "./Navbar";

function StudentHome() {

    const [student, setStudent] = useState([]);
    var result=false;

    let inputHandler = (e) => {
        var search = e.target.value.toLowerCase();
        if (search !== "") {
            result = true;
            fetch(STUDENT_SEARCH + "?search=" + search)
                .then(res => res.json())
                .then(json => setStudent(json));
        } else {
            setStudent([]);
        }
    };
    return (
        <>
            <Navbar />
            <div className="containerInner">
                <input type="search" className="form-control rounded" placeholder="Search ..." onChange={inputHandler} />
            </div>
                <div className="form-check form-check-inline containerInner">
                <Table striped bordered hover>
                    <thead>
                    {result &&
                        <tr>
                            <th>#</th>
                            <th>Name </th>
                            <th>Email </th>
                            <th>Mobile </th>
                            <th>Address</th>
                            <th>Technology</th>
                            <th>BatchName</th>
                        </tr>
                    }
                    </thead>
                    <tbody>
                        {
                            student.map((st, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{st.name}</td>
                                    <td>{st.email}</td>
                                    <td>{st.mobile}</td>
                                    <td>{st.address}</td>
                                    <td>{st.technology}</td>
                                    <td>{st.bacthName}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default StudentHome;