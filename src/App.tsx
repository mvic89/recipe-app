'use client'
import styled from "styled-components";
import { primary, grey } from "./utils/colorvariables";
import { useState } from "react";
import RecipeBtn from "./components/RecipeBtn";
import { Recipes } from "./data/recipesdata";
import type { Recipe } from "./utils/recipetypes";
import Header from "./components/Header";
import Footer from "./components/Footer";




const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;

`

const StyledRecipe = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 2rem 0;
    
    background-color: ${primary.tint};
`

const StyledRecipeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;


    border: 1px solid #333;

    max-width: 500px;

    img {
        width: 100%;
    }
`


const App = () => {
    const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);

    const getRandomRecipe = () => {
        const index = Math.floor(Math.random() * Recipes.length);
        setRandomRecipe(Recipes[index]);
    };


  return (
    <StyledMainDiv>
        <Header/>
        <StyledRecipe>
            <h1>Random Italian Pasta Recipes</h1>
            <RecipeBtn onClick={getRandomRecipe}/>
            {randomRecipe && (
                <StyledRecipeContent>
                    <h2>{randomRecipe.title}</h2>
                    <img src={randomRecipe.image} alt={randomRecipe.title} width="300" />
                    <p>{randomRecipe.summary}</p>
                    <h4>Ingredients</h4>
                    <ul>
                      {randomRecipe.ingredients.map((ingredient, index) => (
                        <li key={index}>
                          {ingredient.quantity} – {ingredient.name}
                        </li>
                      ))}
                    </ul>
                    <h4>Steps</h4>
                    <ol>
                      {randomRecipe.steps.map((step, index) => (
                        <li key={index}>{step.description}</li>
                      ))}
                    </ol>
                </StyledRecipeContent>
            )}
        </StyledRecipe>
        <Footer/>
    </StyledMainDiv>
  )
}

export default App
