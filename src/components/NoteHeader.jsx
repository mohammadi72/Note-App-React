function NoteHeader({ notes, sortBy, onSort }) {
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
      (a, b) => Number(a.completed) - Number(b.completed)
    ); //a-b => a>b ? 1 : -1

  return (
    <div className="note-header">
      <h1>My Notes ({notes.length})</h1>
      <select value={sortedNotes} onChange={onSort}>
        <option value="latest">Sort based on latest notes.</option>
        <option value="earliest">Sort based on earliest notes.</option>
        <option value="completed">Sort based on completed notes.</option>
      </select>
    </div>
  );
}

export default NoteHeader;
