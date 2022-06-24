import { NoNotesWrapper, StyledButton, StyledH1 } from "./NoNotes.style";

const NoNotes = ({ createNewNote }) => {
  return (
    <NoNotesWrapper>
      <StyledH1>You have no notes</StyledH1>
      <StyledButton onClick={createNewNote}>Create one now</StyledButton>
    </NoNotesWrapper>
  );
};

export default NoNotes;
