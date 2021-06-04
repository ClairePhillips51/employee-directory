import './App.css';
import API from "./utils/API";
import React, { useState, useEffect } from 'react';
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

function App() {
  const [employees, setEmployees] = useState([]);
  const [filterEmployees, setFilterEmployees] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    API.getRandomEmployees().then(res => {
      setEmployees(res.data.results);
      setFilterEmployees(res.data.results);
    });
  }, []);

  useEffect(() => {
    const filtered = employees.filter(e => (e.name.first.toUpperCase()+" "+e.name.last.toUpperCase()).includes(filter.toUpperCase()));
    setFilterEmployees(filtered);
  }, [filter, employees]);

  return (
    <div className="App">
      <SearchBar
        setFilter = {setFilter}
      />
      <Table
        employees = {filterEmployees}
      /> 
    </div>
  );
}

export default App;
