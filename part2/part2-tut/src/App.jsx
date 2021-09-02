import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import axios from "axios";

const App = (props) => {
  // const { notes } = props;
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get("http://10.1.1.183:3001/notes").then((response) => {
      const data = response.data;
      setNotes(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setNotes()
    // console.log("button clicked", e.target);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    axios.post("http://10.1.1.183:3001/notes", noteObject).then((response) => {
      setNotes(notes.concat(noteObject));
      setNewNote("");
    });
  };

  const handleInput = (e) => setNewNote(e.target.value);
  // console.log(newNote);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const handleToggle = () => setShowAll(!showAll);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={handleToggle}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleInput} />
        <button>save</button>
      </form>
    </div>
  );
};

export default App;
