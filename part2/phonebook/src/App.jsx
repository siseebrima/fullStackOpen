import React, { useState } from "react";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

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
