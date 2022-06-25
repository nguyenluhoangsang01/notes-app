import {
  DeleteButton,
  Note,
  SidebarHeader,
  SidebarNotes,
  SidebarWrapper,
  StyledButton,
  StyledH3,
} from "./Sidebar.style";

const Sidebar = ({
  notes,
  currentNote,
  setCurrentNoteId,
  newNote,
  onRemoveNote,
}) => {
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
            className={`ellipsis ${
              note.id === currentNote.id ? "selected-note" : ""
            }`}
            title={note.body.split("\n")[0]}
          >
            {note.body.split("\n")[0]}

            <DeleteButton onClick={(e) => onRemoveNote(e, note.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </DeleteButton>
          </Note>
        </SidebarNotes>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
