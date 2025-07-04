import { useState } from "react";
import RecipeBtn from "./components/RecipeBtn";
import { Recipes } from "./data/recipesdata";
import type { Recipe } from "./utils/recipetypes";


const App = () => {
    const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);

    const getRandomRecipe = () => {
        const index = Math.floor(Math.random() * Recipes.length);
        setRandomRecipe(Recipes[index]);
    };

  return (
    <div>
        <h1>Recipe App</h1>
        <RecipeBtn onClick={getRandomRecipe}/>

        {randomRecipe && (
            <div>
                <h2>{randomRecipe.title}</h2>
                <img src={randomRecipe.image} alt={randomRecipe.title} width="300" />
                <p>{randomRecipe.summary}</p>
            </div>
        )}
    </div>
  )
}

export default App
