import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);
function notesReducer(notes, action) {
  switch (action.type) {
    case "addNotes": {
      return [...notes, action.payload];
    }
    case "deleteNote": {
      return notes.filter((n) => n.id !== action.payload);
    }
    case "completeNote": {
      const newNotes = notes.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
      return newNotes;
    }
    default:
      throw new Error("unknown Error!!");
  }
}
export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>{children}</NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}
export function useNotes() {
  const context = useContext(NotesContext);
  if (context === "undefind")
    throw new Error("NotesContext was used outside of NoteProvider!!!");
  return context;
}
export function useNotesDispatch() {
  const context = useContext(NotesDispatchContext);
  if (context === "undefind")
    throw new Error("NotesContext was used outside of NoteProvider!!!");
  return context;
}
