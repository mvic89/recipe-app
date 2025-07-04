'use client'
import styled from "styled-components";
import { primary, grey } from "../../utils/colorvariables";

interface RecipeBtnProps {
    onClick: () => void;
}

const StyledBtn = styled.a`
    background-color: ${primary.base};
    color: white;
    border: none;
    padding: 12px 20px;
    margin: 20px;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: ${primary.shade};
    }

`

const RecipeBtn = ({onClick}: RecipeBtnProps) => {
    return (
        <StyledBtn onClick={onClick}>Show Random Recipes</StyledBtn>
    )
}

export default RecipeBtn