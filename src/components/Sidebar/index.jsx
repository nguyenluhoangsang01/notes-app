import {
  Note,
  SidebarHeader,
  SidebarNotes,
  SidebarWrapper,
  StyledButton,
  StyledH3,
} from "./Sidebar.style";

const Sidebar = ({ notes, currentNote, setCurrentNoteId, newNote }) => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <StyledH3>Notes</StyledH3>
        <StyledButton onClick={newNote}>+</StyledButton>
      </SidebarHeader>
      {notes.map((note, index) => (
        <SidebarNotes key={`${note.id}-${index}`}>
          <Note
            onClick={() => setCurrentNoteId(note.id)}
            className={note.id === currentNote.id ? "selected-note" : ""}
          >
            Note {index + 1}
          </Note>
        </SidebarNotes>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
