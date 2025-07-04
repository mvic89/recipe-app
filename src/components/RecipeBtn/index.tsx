'use client'
import styled from "styled-components";
import { primary, grey } from "../../utils/colorvariables";

interface RecipeBtnProps {
    onClick: () => void;
}

const StyledBtn = styled.a`
    background-color: ${primary.base};
    color: ${grey.shade};
    border: none;
    padding: 12px 20px;
    margin: 20px;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: ${primary.shade};
        color: ${grey.tint}
    }

`

const RecipeBtn = ({onClick}: RecipeBtnProps) => {
    return (
        <StyledBtn onClick={onClick}>Click here!</StyledBtn>
    )
}

export default RecipeBtn