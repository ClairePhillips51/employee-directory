import React from "react";
import Employee from "../Employee";

function Table(props) {
    const employees = props.employees;
    let items = [];

    for (let iEmployee = 0 ; iEmployee < employees.length ; iEmployee++)
    {
        items.push(
            <Employee
                key = {employees[iEmployee].login.uuid}
                employee = {employees[iEmployee]}
            />
        )
    }

    return (
        <table>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Office #</th>
                <th>Cell #</th>
            </tr>
            {items}
        </table>
    );
}

export default Table;