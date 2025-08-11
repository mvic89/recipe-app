'use client';
import styled from "styled-components";
import { primary, grey } from "../../utils/colorvariables";

interface DeleteBtnProps {
  onClick: () => void;
}

const StyledBtn = styled.a`
  background-color: ${grey.tint};
  color: ${grey.shade};
  border: none;
  padding: 10px 16px;
  margin-top: 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${primary.tint};
    color: ${primary.shade};
  }
`;

const DeleteBtn = ({ onClick }: DeleteBtnProps) => {
  return <StyledBtn onClick={onClick}>Delete Saved</StyledBtn>;
};

export default DeleteBtn;