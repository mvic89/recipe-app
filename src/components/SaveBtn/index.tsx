import styled from "styled-components";
import { primary, grey } from "../../utils/colorvariables";
import type { Recipe } from "../../utils/recipetypes";

interface SaveBtnProps {
  recipe: Recipe;
  onRecipeSaved: (recipe: Recipe) => void;
}

const StyledBtn = styled.a`
  background-color: ${grey.tint};
  color: ${grey.shade};
  border: none;
  padding: 12px 20px;
  margin: 20px auto;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${primary.tint};
    color: ${primary.shade};
  }
`;

const SaveBtn = ({ recipe, onRecipeSaved }: SaveBtnProps) => {
  const handleSave = () => {
    localStorage.setItem("savedRecipe", JSON.stringify(recipe));
    onRecipeSaved(recipe);
  };

  return <StyledBtn onClick={handleSave}>Save Recipe</StyledBtn>;
};

export default SaveBtn;