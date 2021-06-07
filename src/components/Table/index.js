import "./index.css";
import React, { useState }from "react";
import Employee from "../Employee";

function Table(props) {
    const [buttonText, setText] = useState("Name");

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
        const sorted = props.sortByName();
        if(sorted)
            setText("Name");
        else
            setText("Name ⇩");
    }

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th id="nameCol">
                        <button onClick={clickHandler}>{buttonText}</button>
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