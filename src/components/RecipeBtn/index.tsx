'use client'
import styled from "styled-components";

interface RecipeBtnProps {
    onClick: () => void;
}

const StyledBtn = styled.a`
    background-color: #ff5e57;
    color: white;
    border: none;
    padding: 12px 20px;
    margin: 20px;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
`

const RecipeBtn = ({onClick}: RecipeBtnProps) => {
    return (
        <StyledBtn onClick={onClick}>Show Random Recipes</StyledBtn>
    )
}

export default RecipeBtn