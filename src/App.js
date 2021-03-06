import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Split from "react-split";
import "./App.css";
import Editor from "./components/Editor";
import NoNotes from "./components/NoNotes";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
    setCurrentNoteId(newNote.id);
  };

  const updateNote = (text) => {
    setNotes((oldNotes) => {
      const newArray = [];

      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];

        oldNote.id === currentNoteId
          ? newArray.unshift({ ...oldNote, body: text })
          : newArray.push(oldNote);
      }

      return newArray;
    });
  };

  const findCurrentNote = () =>
    notes.find((note) => note.id === currentNoteId) || notes[0];

  const handleRemoveNote = (e, noteId) => {
    e.stopPropagation();

    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  return (
    <div className="App">
      {notes.length > 0 ? (
        <Split
          className="split"
          sizes={[25, 75]}
          minSize={100}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
        >
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            onRemoveNote={handleRemoveNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor updateNote={updateNote} currentNote={findCurrentNote()} />
          )}
        </Split>
      ) : (
        <NoNotes createNewNote={createNewNote} />
      )}
    </div>
  );
}

export default App;
