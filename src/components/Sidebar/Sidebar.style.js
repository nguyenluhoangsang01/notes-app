import styled from "styled-components";

export const SidebarWrapper = styled.section`
  height: 100vh;
`;
export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8rem;
`;
export const StyledH3 = styled.h3`
  font-size: 2.8rem;
  font-weight: 500;
  cursor: default;
`;
export const StyledButton = styled.button`
  cursor: pointer;
  background-color: #4a4e74;
  border: none;
  color: white;
  border-radius: 3px;
  height: 30px;
  width: 30px;
  text-align: center;
`;
export const SidebarNotes = styled.div``;
export const Note = styled.div`
  height: 5rem;
  text-indent: 2rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.3rem;
  cursor: pointer;
`;
