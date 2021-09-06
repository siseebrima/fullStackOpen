import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import Notification from "./components/Notification";
// import axios from "axios";
import noteService from "./services/notes";

const App = (props) => {
  // const { notes } = props;
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState("some error happened");

  useEffect(() => {
    noteService.getAll().then((response) => {
      setNotes(response);
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

    noteService.create(noteObject).then((response) => {
      setNotes(notes.concat(response));
      setNewNote("");
    });
  };

  const handleInput = (e) => setNewNote(e.target.value);
  // console.log(newNote);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const handleToggle = () => setShowAll(!showAll);

  const toggleImportance = (id) => {
    // console.log("the importance of", id, "has been toggled");
    // const url = `http://10.1.1.183:3001/notes/${id}`;
    // console.log(url);
    const note = notes.find((n) => n.id === id);
    // console.log(note);
    const changedNote = { ...note, important: !note.important };
    // console.log(changedNote);

    noteService
      .update(id, changedNote)
      .then((response) => {
        setNotes(notes.map((note) => (note.id !== id ? note : response)));
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from the server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });

    // axios.put(url, changedNote).then((response) => {
    //   // console.log(response);
    //   setNotes(notes.map((n) => (n.id !== id ? note : response.data)));
    // });
  };

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={handleToggle}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => {
          return (
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportance(note.id)}
            />
          );
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
