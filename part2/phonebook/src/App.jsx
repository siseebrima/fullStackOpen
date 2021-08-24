import React, { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get("http://10.1.1.183:3001/persons").then((response) => {
      // console.log(response.data)
      const data = response.data;
      setPersons(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const names = persons.filter((p) => p.name === newName);
    names.length > 0
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  const handleName = (e) => {
    const name = e.target.value;
    setNewName(name.trim());
  };
  const handleNumber = (e) => {
    const number = e.target.value;
    setNewNumber(number.trim());
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const toShow = persons.filter((person) => {
      return person.name.toLowerCase().includes(value.toLowerCase());
    });

    // console.log(toShow);
    setFiltered(toShow);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        handleName={handleName}
        handleNumber={handleNumber}
        newName={newName}
        newNumber={newNumber}
      />
      {/* <div>debug: {newName}</div> */}
      <Contacts filtered={filtered} persons={persons} />
    </div>
  );
};

export default App;
