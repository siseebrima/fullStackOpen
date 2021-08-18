import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  // const { notes } = props;
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

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
    setNotes(notes.concat(noteObject));
    setNewNote("");
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
