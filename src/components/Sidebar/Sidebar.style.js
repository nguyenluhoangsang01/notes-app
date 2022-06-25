import styled from "styled-components";

export const SidebarWrapper = styled.section`
  height: 100vh;
`;
export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  padding: 0 10%;
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
export const SidebarNotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Note = styled.div`
  height: 5rem;
  line-height: 5rem;
  text-indent: 10%;
  font-weight: 500;
  font-size: 1.3rem;
  cursor: pointer;

  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  width: calc(100%);
  white-space: nowrap;

  &:hover > button {
    visibility: visible;
  }
`;
export const DeleteButton = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  margin-left: 2rem;
  position: absolute;
  left: -1.8rem;
  visibility: hidden;
`;
