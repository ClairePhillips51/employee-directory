import React from "react";

function Employee(props) {
    const employee = props.employee;
    return (
        <tr>
            <td>
                <img alt="employee" src={employee.picture.thumbnail}/>
            </td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.cell}</td>
        </tr>
    );
}

export default Employee;