import './App.css';
import API from "./utils/API";
import React, { useState, useEffect } from 'react';
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

function App() {
  const [employees, setEmployees] = useState([]);
  const [filterEmployees, setFilterEmployees] = useState([]);
  const [sortedEmployees, setSortedEmployees] = useState([]);
  const [filter, setFilter] = useState("");
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    API.getRandomEmployees().then(res => {
      setEmployees(res.data.results);
      setFilterEmployees(res.data.results);
    });
  }, []);

  useEffect(() => {
    const filtered = employees.filter(e => (e.name.first.toUpperCase()+" "+e.name.last.toUpperCase()).includes(filter.toUpperCase()));
    setFilterEmployees(filtered);
  }, [filter, employees, sorted]);

  function sortByName(){
    setSorted(!sorted);
    return sorted;
  }

  useEffect(() => {
    let sortedEmployees = filterEmployees;
    if (sorted){
      sortedEmployees = filterEmployees.sort((a,b) => {
        if (a.name.first+" "+a.name.last > b.name.first+" "+b.name.last)
          return 1;
        else if (a.name.first+" "+a.name.last < b.name.first+" "+b.name.last)
          return -1;
        else
          return 0;
      });
    }
    setSortedEmployees(sortedEmployees);
  }, [sorted, filter, filterEmployees]);

  return (
    <div className="App">
      <SearchBar
        setFilter = {setFilter}
      />
      <Table
        employees = {sortedEmployees}
        sortByName = {sortByName}
      /> 
    </div>
  );
}

export default App;
