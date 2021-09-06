import React, { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
// import axios from "axios";
// import serices from "./services/personService";
import services from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    services.getAll().then((response) => {
      // console.log(response.data)
      const data = response;
      setPersons(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const names = persons.filter((p) => p.name === newName);
    names.length > 0
      ? alert(`${newName} is already added to phonebook`)
      : services
          .create({
            name: newName,
            number: newNumber,
          })
          .then((response) => {
            setPersons(persons.concat(response));
          });
    setNewName("");
    setNewNumber("");
  };

  const handleName = (e) => {
    const name = e.target.value;
    setNewName(name);
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

  const handleDelete = (id) => {
    // console.log(`the id of this person is ${id} `);
    const person = persons.find((p) => p.id === id);
    console.log(person);
    alert(`do you want to delete ${person.name}?`);
    services.remove(id, person).then((response) => {
      setPersons(persons.filter((p) => p.id !== id));
    });
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
      <Contacts
        filtered={filtered}
        persons={persons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
