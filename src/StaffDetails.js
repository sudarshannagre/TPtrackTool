import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { STAFF_LIST } from "./Apis";
import Navbar from "./Navbar";

function StaffDetails() {
    const [staffList, setStaffList] = useState([]);
    var result =false;

    function loadStaff() {
        
        fetch(STAFF_LIST)
        .then(res => res.json())
        .then(json => setStaffList(json));

       
    }

    useEffect(() => {
        loadStaff();
        
    }, []);

    return (
        <>
            <Navbar />
            <div className="form-check form-check-inline">
                <Table striped bordered hover>
                    <thead>
                    {!result &&
                        <tr>
                            <th>#</th>
                            <th>Name </th>
                            <th>Role </th>
                            <th>Email </th>
                            <th>Mobile </th>
                        </tr>
                    }
                    </thead>
                    <tbody>
                        {
                            staffList.map((staff, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{staff.name}</td>
                                    <td>{staff.role}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.mobile}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default StaffDetails;