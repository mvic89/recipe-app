'use client'
import styled from "styled-components";
import { primary, grey } from "./utils/colorvariables";
import { useState } from "react";
import RecipeBtn from "./components/RecipeBtn";
import { Recipes } from "./data/recipesdata";
import type { Recipe } from "./utils/recipetypes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { screens } from "./utils/breakpoints";




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

    @media screen and ${screens.mobile} {
        h1 {
            font-size: 1.5rem;
        }
    }
`

const StyledRecipeContent = styled.div`
    display: flex;
    flex-direction: column;
   
    gap: 1rem;
    padding: 2rem;


    
    background-color: ${primary.base};
    border-radius: 10px;

    max-width: 500px;

    img {
        width: 100%;
    }

    ul {
        padding-left: 1rem;
    }

    ol {
        padding-left: 1rem;
    }

    

    ul li {
        margin-bottom: 0.25rem;
    }

    ol li {
        margin-bottom: 0.75rem;
    }


    @media screen and ${screens.mobile} {
        width: 80%;

        h2 {
            font-size: 1.25rem;
        }
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
