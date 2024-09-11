import { useState } from "react";
import { useNotesDispatch } from "../context/NotesContext";

function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useNotesDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTitle("");
    setDescription("");
    dispatch({ type: "addNotes", payload: newNote });
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field"
          placeholder="note title ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-field"
          placeholder="note description ..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn--primary" type="submit">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
