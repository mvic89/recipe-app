'use client'
import type { Recipe } from "../../utils/recipetypes";
import DeleteBtn from "../DeleteBtn";
import styled from "styled-components";
import { screens } from "../../utils/breakpoints";
import { primary } from "../../utils/colorvariables";

interface SavedRecipesProps {
  recipe: Recipe;
  onRemove: () => void;
}

const StyledSaved = styled.div`
  background-color: ${primary.tint};
  margin-bottom: 2rem;
`
const StyledSavedContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.75rem;
    max-width: 500px;
    margin: 2rem auto;
    gap: 1rem;
    background-color: ${primary.base};
    border-radius: 10px;

    img {
      width: 100%
    }

  

    @media screen and ${screens.mobile} {
      width: 80%;

      h1 {
        font-size: 1.5rem;
      }

      img {
        width: 100%
      }
    }
`

const SavedRecipes = ({ recipe, onRemove }: SavedRecipesProps) => {
  return (
    <StyledSaved>
      <StyledSavedContent>
        <h2>Saved Recipe</h2>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt={recipe.title} width="300" />
        <p>{recipe.summary}</p>
        <DeleteBtn onClick={onRemove}/>
      </StyledSavedContent>
    </StyledSaved>
  );
};

export default SavedRecipes;