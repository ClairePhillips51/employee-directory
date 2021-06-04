import logo from './logo.svg';
import './App.css';
import API from "./utils/API";
import React, { useState } from 'react';
//import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

function App() {
  const [employees, setEmployees] = useState([]);
  API.getRandomEmployees().then(res => {
    setEmployees(res.data.results);
    console.log(employees);
  });
  return (
    <div className="App">
     <Table
      employees = {employees}
     /> 
    </div>
  );
}

export default App;
