import React from "react";
import Employee from "../Employee";

function Table(props) {
    const employees = props.employees;
    let items = employees.map(e => {
        return (
            <Employee
                key = {e.login.uuid}
                employee = {e}
            />
        );
    });

    function clickHandler() {
        props.sortByName();
    }

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>
                        <button onClick={clickHandler}>Name</button>
                    </th>
                    <th>Email</th>
                    <th>Office #</th>
                    <th>Cell #</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>
    );
}

export default Table;