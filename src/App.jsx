import "./App.css";
import { useReducer, useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [notes , dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "addNotes": {
        return [...state, action.payload];
      }
      case "deleteNote": {
        return state.filter((n) => n.id !== action.payload);
      }
      case "completeNote": {
        const newNotes = state.map((note) =>
          note.id === action.payload
            ? { ...note, completed: !note.completed }
            : note
        );
        return newNotes;
      }
      default:
        throw new Error("unknown Error!!");
    }
  }, []);
  const handleAddNotes = (newNote) => {
    dispatch({ type: "addNotes", payload: newNote });
    // setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDeleteNote = (id) => {
    dispatch({ type: "deleteNote", payload: id });
    // const filteredNotes=notes.filter((n)=>n.id !== id);
    // setNotes(filteredNotes)
    //********************* down correct*/
    // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);
    dispatch({ type: "completeNote", payload: noteId });

    //********************* up correct*/

    // setNotes((prevNotes)=>prevNotes.map((note) =>
    //      note.id === noteId ? { ...note, completed: !note.completed } : note
    //    ))
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
