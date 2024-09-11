import { useNotes, useNotesDispatch } from "../context/NotesContext";

function NoteList({ sortBy }) {
  const notes = useNotes();
  let sortedNotes = notes;

  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ); //a-b => a>b ? 1 : -1
  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ); //a-b => a>b ? -1 : 1
  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(b.completed) - Number(a.completed)
    ); //a-b => a>b ? 1 : -1
  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dispatch = useNotesDispatch();
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button
            onClick={() => dispatch({ type: "deleteNote", payload: note.id })}
          >
            ❌
          </button>
          <input
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "completeNote", payload: noteId });
            }}
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
