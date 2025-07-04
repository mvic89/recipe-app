'use client'
import styled from "styled-components";
import { useState } from "react";
import RecipeBtn from "./components/RecipeBtn";
import { Recipes } from "./data/recipesdata";
import type { Recipe } from "./utils/recipetypes";
import Header from "./components/Header";
import Footer from "./components/Footer";


const StyledDiv = styled.div`
    height: 100vh;
`

const StyledMainDiv = styled.div`
    height: 100%;
`

const StyledRecipe = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledRecipeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`


const App = () => {
    const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);

    const getRandomRecipe = () => {
        const index = Math.floor(Math.random() * Recipes.length);
        setRandomRecipe(Recipes[index]);
    };


  return (
    <StyledDiv>
        <StyledMainDiv>
            <Header/>
            <StyledRecipe>
            <h1>Recipe App</h1>
            <RecipeBtn onClick={getRandomRecipe}/>
            {randomRecipe && (
                <StyledRecipeContent>
                    <h2>{randomRecipe.title}</h2>
                    <img src={randomRecipe.image} alt={randomRecipe.title} width="300" />
                    <p>{randomRecipe.summary}</p>
                </StyledRecipeContent>
            )}
            </StyledRecipe>
            <Footer/>
        </StyledMainDiv>
    </StyledDiv>
  )
}

export default App
