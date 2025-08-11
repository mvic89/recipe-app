import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import SavedRecipes from "./components/SavedRecipes";
import type { Recipe } from "./utils/recipetypes";


const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;



const App = () => {
  const [savedRecipe, setSavedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("savedRecipe");
    if (stored) {
      try {
        const parsed: Recipe = JSON.parse(stored);
        setSavedRecipe(parsed);
      } catch (error) {
        console.error("Error parsing saved recipe:", error);
      }
    }
  }, []);

  const handleRecipeSave = (recipe: Recipe) => {
    localStorage.setItem("savedRecipe", JSON.stringify(recipe));
    setSavedRecipe(recipe);
  };

  const handleRecipeRemove = () => {
    localStorage.removeItem("savedRecipe");
    setSavedRecipe(null);
  };

  return (
    <StyledMainDiv>
      <Header />
      <RecipeList
        headline="Random Italian Pasta Recipes"
        firstSubtitle="Ingredients"
        secondSubtitle="Steps"
        onRecipeSaved={handleRecipeSave}
      />
      {savedRecipe && (
        <SavedRecipes recipe={savedRecipe} onRemove={handleRecipeRemove} />
      )}
      <Footer />
    </StyledMainDiv>
  );
};

export default App;