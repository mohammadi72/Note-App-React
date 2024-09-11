import "./App.css";
import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import {NotesProvider} from "./context/NotesContext";

function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  // const handleAddNotes = (newNote) => {
  //   dispatch({ type: "addNotes", payload: newNote });
  //   // setNotes((prevNotes) => [...prevNotes, newNote]);
  // };
  // const handleDeleteNote = (id) => {
  //   dispatch({ type: "deleteNote", payload: id });
  //   // const filteredNotes=notes.filter((n)=>n.id !== id);
  //   // setNotes(filteredNotes)
  //   //********************* down correct*/
  //   // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  // };
  // const handleCompleteNote = (e) => {
  //   const noteId = Number(e.target.value);
  //   // const newNotes = notes.map((note) =>
  //   //   note.id === noteId ? { ...note, completed: !note.completed } : note
  //   // );
  //   // setNotes(newNotes);
  //   dispatch({ type: "completeNote", payload: noteId });

  //   //********************* up correct*/

  //   // setNotes((prevNotes)=>prevNotes.map((note) =>
  //   //      note.id === noteId ? { ...note, completed: !note.completed } : note
  //   //    ))
  // };

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
